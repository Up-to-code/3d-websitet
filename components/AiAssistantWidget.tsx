"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, X, Bot, Cpu, Sparkles, Minimize2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    isTyping?: boolean;
}

export default function AiAssistantWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "أهلاً بك في المنطقة الرقمية! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMsg = inputValue;
        setInputValue("");

        // Add User Message
        const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages.map(({ role, content }) => ({ role, content }))
                })
            });

            const data = await res.json();

            if (data.choices && data.choices[0]?.message) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "عذراً، حدث خطأ في الاتصال بالنظام." }]);
            }

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: "فشل الاتصال بالخادم. حاول مرة أخرى." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-mono" dir="rtl">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-black/90 border border-[var(--accent)] w-[350px] md:w-[400px] h-[500px] shadow-[0_0_40px_var(--accent)/20] flex flex-col rounded-none overflow-hidden backdrop-blur-md"
                    >
                        {/* Header */}
                        <div className="h-12 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-4">
                            <div className="flex items-center gap-2 text-[var(--accent)]">
                                <Bot size={18} />
                                <span className="text-xs font-bold tracking-wider">AI_ASSISTANT_V1.0</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <Minimize2 size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            <div className="text-center text-[10px] text-slate-500 mb-4 tracking-widest">
                                --- SYSTEM INITIALIZED ---
                            </div>

                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 text-sm rounded-none border ${msg.role === 'user'
                                                ? 'bg-slate-900 border-slate-700 text-slate-200 rounded-tl-lg'
                                                : 'bg-[var(--accent)]/10 border-[var(--accent)]/50 text-white rounded-tr-lg shadow-[0_0_10px_var(--accent)/10]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px]">
                                            {msg.role === 'user' ? (
                                                <> <Terminal size={10} /> USER </>
                                            ) : (
                                                <> <Cpu size={10} /> SYSTEM </>
                                            )}
                                        </div>
                                        <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-end">
                                    <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/30 p-3 rounded-none flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[var(--accent)] animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-[var(--accent)] animate-bounce delay-100"></div>
                                        <div className="w-1.5 h-1.5 bg-[var(--accent)] animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-slate-800 bg-black">
                            <div className="relative flex items-center">
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="أدخل أمر النظام..."
                                    className="w-full bg-slate-900 border border-slate-700 p-3 pr-10 text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none resize-none h-12 scrollbar-hide"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading}
                                    className="absolute left-2 text-[var(--accent)] hover:text-white transition-colors disabled:opacity-50"
                                >
                                    {isLoading ? <Cpu size={18} className="animate-spin" /> : <Send size={18} className="rtl:rotate-180" />}
                                </button>
                            </div>
                            <div className="text-[9px] text-slate-600 mt-2 text-center font-mono">
                                POWERED_BY_TRINITY_MODEL_V2
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="bg-[var(--accent)] w-14 h-14 flex items-center justify-center rounded-none border-2 border-white/20 shadow-[0_0_20px_var(--accent)] relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Sparkles size={24} className="text-black relative z-10 animate-pulse" />
                </motion.button>
            )}
        </div>
    );
}
