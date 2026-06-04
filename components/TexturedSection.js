const transforms = ['none', 'scaleX(-1)', 'scaleY(-1)', 'scale(-1, -1)']

export default function TexturedSection({ children, className = '', variant = 0, as: Tag = 'section' }) {
  return (
    <Tag className={`relative ${className}`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/texture-scratch.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: transforms[variant % 4],
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  )
}
