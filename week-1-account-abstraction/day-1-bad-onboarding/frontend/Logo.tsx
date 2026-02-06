export default function Logo({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="luxonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <radialGradient id="coreGradient">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer orbital rings - representing security layers */}
      <circle 
        cx="60" 
        cy="60" 
        r="50" 
        stroke="url(#luxonGradient)" 
        strokeWidth="0.5" 
        fill="none" 
        opacity="0.3"
      />
      <circle 
        cx="60" 
        cy="60" 
        r="42" 
        stroke="url(#luxonGradient)" 
        strokeWidth="0.5" 
        fill="none" 
        opacity="0.4"
      />
      
      {/* Three orbital paths - representing three-body system */}
      <ellipse 
        cx="60" 
        cy="60" 
        rx="35" 
        ry="35" 
        stroke="url(#luxonGradient)" 
        strokeWidth="1" 
        fill="none" 
        opacity="0.5"
        strokeDasharray="4 4"
        transform="rotate(0 60 60)"
      />
      <ellipse 
        cx="60" 
        cy="60" 
        rx="35" 
        ry="35" 
        stroke="url(#luxonGradient)" 
        strokeWidth="1" 
        fill="none" 
        opacity="0.5"
        strokeDasharray="4 4"
        transform="rotate(60 60 60)"
      />
      <ellipse 
        cx="60" 
        cy="60" 
        rx="35" 
        ry="35" 
        stroke="url(#luxonGradient)" 
        strokeWidth="1" 
        fill="none" 
        opacity="0.5"
        strokeDasharray="4 4"
        transform="rotate(120 60 60)"
      />
      
      {/* Central core - representing blockchain foundation */}
      <circle 
        cx="60" 
        cy="60" 
        r="8" 
        fill="url(#coreGradient)" 
        filter="url(#glow)"
      />
      
      {/* Three primary particles/nodes - three-body problem */}
      {/* Particle 1 - Top */}
      <g transform="translate(60, 25)">
        <circle r="5" fill="url(#particleGradient)" filter="url(#glow)" />
        <circle r="2" fill="#FFD700" opacity="0.8" />
        {/* Particle trails */}
        <path 
          d="M -3 -3 Q -6 -6, -8 -8" 
          stroke="url(#luxonGradient)" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.4"
        />
      </g>
      
      {/* Particle 2 - Bottom Left */}
      <g transform="translate(30, 80)">
        <circle r="5" fill="url(#particleGradient)" filter="url(#glow)" />
        <circle r="2" fill="#FFD700" opacity="0.8" />
        <path 
          d="M -3 3 Q -6 6, -8 8" 
          stroke="url(#luxonGradient)" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.4"
        />
      </g>
      
      {/* Particle 3 - Bottom Right */}
      <g transform="translate(90, 80)">
        <circle r="5" fill="url(#particleGradient)" filter="url(#glow)" />
        <circle r="2" fill="#FFD700" opacity="0.8" />
        <path 
          d="M 3 3 Q 6 6, 8 8" 
          stroke="url(#luxonGradient)" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.4"
        />
      </g>
      
      {/* Connection lines between particles - blockchain network */}
      <line 
        x1="60" y1="25" x2="30" y2="80" 
        stroke="url(#luxonGradient)" 
        strokeWidth="1" 
        opacity="0.5"
        strokeDasharray="2 2"
      />
      <line 
        x1="60" y1="25" x2="90" y2="80" 
        stroke="url(#luxonGradient)" 
        strokeWidth="1" 
        opacity="0.5"
        strokeDasharray="2 2"
      />
      <line 
        x1="30" y1="80" x2="90" y2="80" 
        stroke="url(#luxonGradient)" 
        strokeWidth="1" 
        opacity="0.5"
        strokeDasharray="2 2"
      />
      
      {/* Connections from particles to core - security */}
      <line 
        x1="60" y1="30" x2="60" y2="52" 
        stroke="url(#luxonGradient)" 
        strokeWidth="0.8" 
        opacity="0.6"
        filter="url(#softGlow)"
      />
      <line 
        x1="35" y1="75" x2="54" y2="64" 
        stroke="url(#luxonGradient)" 
        strokeWidth="0.8" 
        opacity="0.6"
        filter="url(#softGlow)"
      />
      <line 
        x1="85" y1="75" x2="66" y2="64" 
        stroke="url(#luxonGradient)" 
        strokeWidth="0.8" 
        opacity="0.6"
        filter="url(#softGlow)"
      />
      
      {/* Data flow particles along connections */}
      <circle cx="60" cy="40" r="1.5" fill="#FFD700" opacity="0.8">
        <animate attributeName="cy" values="30;52;30" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="70" r="1.5" fill="#FFD700" opacity="0.8">
        <animate attributeName="cx" values="35;54;35" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="75;64;75" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="70" r="1.5" fill="#FFD700" opacity="0.8">
        <animate attributeName="cx" values="85;66;85" dur="4s" repeatCount="indefinite" />
        <animate attributeName="cy" values="75;64;75" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite" />
      </circle>
      
      {/* Hexagonal code structure - development aspect */}
      <g opacity="0.3">
        <path 
          d="M 60 15 L 75 23 L 75 38 L 60 46 L 45 38 L 45 23 Z" 
          stroke="url(#luxonGradient)" 
          strokeWidth="0.8" 
          fill="none"
        />
        <path 
          d="M 25 70 L 35 76 L 35 88 L 25 94 L 15 88 L 15 76 Z" 
          stroke="url(#luxonGradient)" 
          strokeWidth="0.8" 
          fill="none"
        />
        <path 
          d="M 95 70 L 105 76 L 105 88 L 95 94 L 85 88 L 85 76 Z" 
          stroke="url(#luxonGradient)" 
          strokeWidth="0.8" 
          fill="none"
        />
      </g>
      
      {/* Intelligence - neural network nodes */}
      <circle cx="40" cy="45" r="1.2" fill="#FFD700" opacity="0.5" />
      <circle cx="80" cy="45" r="1.2" fill="#FFD700" opacity="0.5" />
      <circle cx="50" cy="55" r="1.2" fill="#FFD700" opacity="0.5" />
      <circle cx="70" cy="55" r="1.2" fill="#FFD700" opacity="0.5" />
      
      {/* Subtle connecting lines for intelligence network */}
      <line x1="40" y1="45" x2="50" y2="55" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
      <line x1="80" y1="45" x2="70" y2="55" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
      <line x1="50" y1="55" x2="60" y2="60" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
      <line x1="70" y1="55" x2="60" y2="60" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
    </svg>
  );
}
