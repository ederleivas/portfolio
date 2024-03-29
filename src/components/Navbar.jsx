import { links } from "../project-assets/data";

const Navbar = () => {
  return (
    <nav className="bg-slate-950">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-slate-50 text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="text-slate-50 flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide
               hover:text-emerald-600 no-underline hover:underline duration-300 "
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
