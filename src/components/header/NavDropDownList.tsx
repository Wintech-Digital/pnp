import { pagePreferencies } from "@constants";

const NavDropDownList = ({ nestedList }) => {
  return (
    <div className="p-4">
      {nestedList.map((id) => (
        <div
          key={id}
          className="group relative flex items-center gap-x-6 px-4 py-4 rounded-lg hover:bg-[#06BA9F]/[.2]"
        >
          <div className="flex-auto">
            <a
              href={pagePreferencies[id].url}
              className="block text-pnp-grey30 hover:text-pnp"
            >
              {pagePreferencies[id].name}
              <span className="absolute inset-0" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavDropDownList;
