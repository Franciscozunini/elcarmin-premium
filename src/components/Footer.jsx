export default function Footer() {
  return (
    <footer className="bg-carbon border-t border-white/10 py-6 pb-24 lg:pb-6">
      <p className="text-center text-xs text-white/40 tracking-wide">
        © {new Date().getFullYear()} El Carmín · Bernal Oeste
      </p>
    </footer>
  )
}
