import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Store/store";
import { clearFavorites } from "../Store/favoriteSlice";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  if (!favorites || favorites.length === 0) {
    return <p className="mt-5 text-center text-gray-500">No favorites yet.</p>;
  }

  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold mb-4 flex justify-center">
        Favorite Users
      </h2>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => dispatch(clearFavorites())}
          className="px-4 py-2 bg-red-500 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-red-600 cursor-pointer"
        >
          Clear All Favorites
        </button>
      </div>
      <ul>
        {favorites.map((user) => (
          <li
            key={user.id}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded flex justify-between items-center space-y-7"
          >
            <div className="flex items-center gap-7 ms-7">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-10 h-10 rounded-full"
              />
              <span>{user.login}</span>
            </div>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-blue-600 me-7"
            >
              View profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
