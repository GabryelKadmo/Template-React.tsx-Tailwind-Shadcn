import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
            <div className="text-center space-y-8 max-w-2xl mx-auto w-full flex flex-col items-center justify-center">
                {/* SVG Animado 404 */}
                <div className="relative flex justify-center">
                    <svg
                        width="100%"
                        height="200"
                        viewBox="0 0 400 200"
                        className="max-w-md mx-auto animate-bounce-slow"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Número 4 */}
                        <g className="animate-fade-in-left">
                            <path
                                d="M20 50 L20 120 L60 120 L60 80 L80 80 L80 50 L80 170"
                                stroke="oklch(0.145 0 0)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                className="animate-draw-line"
                            />
                        </g>

                        {/* Número 0 */}
                        <g className="animate-fade-in-up">
                            <ellipse
                                cx="200"
                                cy="110"
                                rx="50"
                                ry="60"
                                stroke="oklch(0.145 0 0)"
                                strokeWidth="8"
                                fill="none"
                                className="animate-draw-circle"
                            />
                            {/* Olhos do 0 */}
                            <circle cx="185" cy="95" r="6" fill="oklch(0.145 0 0)" className="animate-blink" />
                            <circle cx="215" cy="95" r="6" fill="oklch(0.145 0 0)" className="animate-blink" />
                            {/* Boca triste */}
                            <path
                                d="M175 130 Q200 140 225 130"
                                stroke="oklch(0.145 0 0)"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                className="animate-draw-line"
                            />
                        </g>

                        {/* Número 4 */}
                        <g className="animate-fade-in-right">
                            <path
                                d="M320 50 L320 120 L360 120 L360 80 L380 80 L380 50 L380 170"
                                stroke="oklch(0.145 0 0)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                className="animate-draw-line"
                            />
                        </g>

                        {/* Elementos decorativos flutuantes */}
                        <g className="animate-float">
                            <circle cx="50" cy="30" r="4" fill="#f39c12" className="animate-pulse" />
                            <circle cx="350" cy="40" r="3" fill="#e74c3c" className="animate-pulse" />
                            <circle cx="100" cy="180" r="5" fill="#9b59b6" className="animate-pulse" />
                            <circle cx="300" cy="180" r="4" fill="#1abc9c" className="animate-pulse" />
                        </g>

                        {/* Estrelas piscando */}
                        <g className="animate-twinkle">
                            <path d="M30 180 L32 185 L37 185 L33 188 L35 193 L30 190 L25 193 L27 188 L23 185 L28 185 Z" fill="#f1c40f" />
                            <path d="M370 30 L372 35 L377 35 L373 38 L375 43 L370 40 L365 43 L367 38 L363 35 L368 35 Z" fill="#e67e22" />
                            <path d="M80 20 L82 25 L87 25 L83 28 L85 33 L80 30 L75 33 L77 28 L73 25 L78 25 Z" fill="#3498db" />
                        </g>
                    </svg>
                    {/* Nuvens de fundo */}
                    <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
                        <div className="absolute top-10 left-10 w-16 h-8 bg-gray-300/30 rounded-full animate-float-slow"></div>
                        <div className="absolute top-20 right-20 w-20 h-10 bg-gray-400/20 rounded-full animate-float-slower"></div>
                        <div className="absolute bottom-10 left-1/4 w-12 h-6 bg-gray-300/25 rounded-full animate-float"></div>
                    </div>
                </div>
                {/* Título e descrição */}
                <div className="space-y-4 animate-fade-in-up animation-delay-500">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground text-center">
                        Oops! Página não encontrada
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto text-center">
                        A página que você está procurando não existe ou foi movida para outro lugar.
                    </p>
                </div>
                {/* Botões de ação */}
                <div className="flex justify-center animate-fade-in-up animation-delay-700">
                    <Button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 text-lg animate-pulse-hover"
                    >
                        Voltar ao Início
                    </Button>
                </div>
                {/* Mensagem adicional */}
                <div className="animate-fade-in-up animation-delay-1000 text-center">
                    <p className="text-sm text-muted-foreground">
                        Se você acredita que isso é um erro, entre em contato conosco.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
