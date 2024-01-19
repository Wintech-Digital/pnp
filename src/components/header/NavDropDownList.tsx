import { pagePreferencies } from "@constants";

const NavDropDownList = ({ nestedList }) => {
  return (
    <div className="px-4 py-4">
      {nestedList.map(item => {
        return (
          <div
            key={item.slug}
            className="group relative flex items-center gap-x-6 px-2 py-2 rounded-lg hover:bg-[#06BA9F]/[.2]"
          >
            <div className="flex-auto">
              <a
                href={item.url}
                className="block text-pnp-grey20 hover:text-pnp"
              >
                {item.name}
                <span className="absolute inset-0" />
              </a>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default NavDropDownList;
