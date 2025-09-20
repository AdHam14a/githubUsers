import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../Store/favoriteSlice";
import type { RootState } from "../Store/store";
import Spinner from "./Spinner";
import Search from "./Search";
import { useDebounce } from "react-use";
import Pagination from "./Pagination";
import Landing from "./Landing";

type User = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useDebounce(() => setDebouncedSearch(searchTerm), 500, [searchTerm]);

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const perPage = 50;
  const displayPerPage = 5;
  const API_URL = `https://api.github.com/users?per_page=${perPage}`;

  const fetchingData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);

      if (!response.ok) {
        const err = await response.json();
        const message = err?.message || "Fetch error";
        setUsers([]);
        setError(message);
        return;
      }

      const data: User[] = await response.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
      setUsers([]);
      setError("Fetching error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const totalPages =
    filteredUsers.length > 0
      ? Math.ceil(filteredUsers.length / displayPerPage)
      : 1;

  const userPerPage = filteredUsers.slice(
    (page - 1) * displayPerPage,
    page * displayPerPage
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  return (
    <>
      <div>
        <Landing />
        <div className="relative overflow-x-auto mt-7">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
              <table className="w-full text-sm text-gray-700 dark:text-gray-200 text-center">
                <thead className="text-xs text-gray-800 dark:text-gray-100 uppercase bg-gray-300 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3">Avatar</th>
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3">Profile</th>
                    <th className="px-6 py-3">Add to favorites</th>
                  </tr>
                </thead>
                <tbody>
                  {userPerPage.map((user) => {
                    const fav = favorites.some((u) => u.id === user.id);
                    return (
                      <tr
                        key={user.id}
                        className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 text-center"
                      >
                        <td className="px-6 py-4 flex justify-center">
                          <img
                            src={user.avatar_url}
                            alt="avatar"
                            className="w-[5rem] rounded-full"
                          />
                        </td>
                        <td className="px-6 py-4">{user.login}</td>
                        <td className="px-6 py-4">
                          <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline text-blue-600 dark:text-blue-400"
                          >
                            View profile
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className="flex justify-center items-center cursor-pointer"
                            onClick={() => dispatch(toggleFavorite(user))}
                          >
                            {fav ? (
                              <img
                                src="Liked.png"
                                alt="liked"
                                className="w-[2rem]"
                              />
                            ) : (
                              <img
                                src="NotLiked.png"
                                alt="not liked"
                                className="w-[2rem]"
                              />
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {userPerPage.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="py-10 text-gray-500 dark:text-gray-400"
                      >
                        No users to show.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
