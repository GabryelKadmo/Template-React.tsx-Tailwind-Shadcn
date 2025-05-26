import { useEffect, useState } from 'react'

export default function Wip() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleMX2TechClick = () => {
        window.open('https://www.kadmo.tech/', '_blank')
    }

    const handleLogoClick = () => {
        window.open('https://www.kadmo.tech/', '_blank')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 sm:p-12 max-w-md w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                {/* Header */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Template Pronto
                    </div>
                </div>

                {/* Logo */}
                <div className="mb-8">
                    <div className="w-44 h-44 mx-auto relative group cursor-pointer" onClick={handleLogoClick}>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src="/LogoHero.png"
                                alt="MX2Tech Logo"
                                className="w-44 h-44  rounded-full filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Template React TSX
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Template moderno configurado com React + TypeScript, Tailwind CSS e shadcn/ui
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            React TSX
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">
                            Tailwind CSS
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            shadcn/ui
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <span>Template desenvolvido por</span>
                            <span className="font-semibold text-gray-700">Gabryel Kadmo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>para facilitar nossa vida</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <span
                                className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200"
                                onClick={handleMX2TechClick}
                            >
                                KDM Tecnologia
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
