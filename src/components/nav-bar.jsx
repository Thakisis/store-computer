import Link from "next/link";

export default function NavBar() {
	return (
		<div className="fixed inset-x-0 top-0 flex justify-between px-8 py-4 border-b border-white/40">
			<div>logo</div>
			<nav className="flex gap-4">
				<Link href="/">Home </Link>
				<Link href="/tienda">Tienda</Link>
				<Link href="/contacto">Contacto</Link>
			</nav>
		</div>
	);
}
