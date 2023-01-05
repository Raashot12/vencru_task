import React from "react"
import IconCloud from "../../utilities/IconCloud"
import IconBadge from "../../utilities/IconBadge"
import Download from "../../utilities/Download"

const TableComponent = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-5 mb-5 flex-wrap">
        <p className="font-medium text-lg w-full md:w-auto md:mb-0 mb-4">
          Billing history
        </p>
        <div className="btn flex gap-2 cursor-pointer">
          <span>
            <IconCloud />
          </span>
          <span>Download all</span>
        </div>
      </div>
      <div className="container mx-auto px-2 sm:px-5">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 mb-3 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead style={{color: "#667085"}}>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-10 text-left text-xs font-semibold   text-gray-20 tracking-wider">
                    <div className="flex items-center gap-4">
                      <input type={"checkbox"} className="largerCheckbox " />
                      <div className="flex gap-2 items-center">
                        <span className="">Invoice</span>
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 3.33333V12.6667M8 12.6667L12.6667 8M8 12.6667L3.33333 8"
                              stroke="#667085"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-10 text-left text-xs font-semibold  text-gray-20 tracking-wider">
                    Amount
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-10 text-left text-xs font-semibold text-gray-20  tracking-wider">
                    Date
                  </th>
                  <th className="px-5 py-3 border-b-2 users border-gray-200 bg-gray-10 text-left text-xs font-semibold text-gray-20  tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 users border-gray-200 bg-gray-10 text-left text-xs font-semibold text-gray-20  tracking-wider">
                    Users on plan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 pl-1">
                        <input type={"checkbox"} className="largerCheckbox " />
                      </div>
                      <div className="ml-3">
                        <p className="text-custom-text-color-one whitespace-no-wrap font-medium text-sm">
                          Basic Plan – Dec 2022
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex gap-2 items-center text-gray-20">
                      <p>USD</p>
                      <p>$12,000</p>
                    </div>
                  </td>
                  <td className="px-4 py-4  border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-20 whitespace-no-wrap">
                      Dec 1, 2022
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm users">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <IconBadge />
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm users">
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-1 overflow-hidden">
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="h-6 w-6 rounded-full ring-2 ring-white bg-white flex justify-center items-center">
                          +2
                        </div>
                      </div>
                      <div className="inline-block text-gray-500 hover:text-gray-700 download">
                        <Download />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 pl-1">
                        <input type={"checkbox"} className="largerCheckbox " />
                      </div>
                      <div className="ml-3">
                        <p className="text-custom-text-color-one whitespace-no-wrap font-medium text-sm">
                          Basic Plan – Dec 2022
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex gap-2 items-center text-gray-20">
                      <p>USD</p>
                      <p>$12,000</p>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-20 whitespace-no-wrap">
                      Dec 1, 2022
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm users">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <IconBadge />
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm users">
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-1 overflow-hidden">
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="h-6 w-6 rounded-full ring-2 ring-white bg-white flex justify-center items-center">
                          +2
                        </div>
                      </div>
                      <div className="inline-block text-gray-500 hover:text-gray-700 download">
                        <Download />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 pl-1">
                        <input type={"checkbox"} className="largerCheckbox " />
                      </div>
                      <div className="ml-3">
                        <p className="text-custom-text-color-one whitespace-no-wrap font-medium text-sm">
                          Basic Plan – Dec 2022
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex gap-2 items-center text-gray-20 font-sm">
                      <p>USD</p>
                      <p>$12,000</p>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-20 whitespace-no-wrap">
                      Dec 1, 2022
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm users">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <IconBadge />
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm users">
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-1 overflow-hidden">
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="h-6 w-6 rounded-full ring-2 ring-white bg-white flex justify-center items-center">
                          +2
                        </div>
                      </div>
                      <div className="inline-block text-gray-500 hover:text-gray-700 download">
                        <Download />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 pl-1">
                        <input type={"checkbox"} className="largerCheckbox " />
                      </div>
                      <div className="ml-3">
                        <p className="text-custom-text-color-one whitespace-no-wrap font-medium text-sm">
                          Basic Plan – Dec 2022
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex gap-2 items-center text-gray-20 font-sm">
                      <p>USD</p>
                      <p>$12,000</p>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-20 whitespace-no-wrap">
                      Dec 1, 2022
                    </p>
                  </td>

                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm users">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <IconBadge />
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm users">
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-1 overflow-hidden">
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="h-6 w-6 rounded-full ring-2 ring-white bg-white flex justify-center items-center">
                          +2
                        </div>
                      </div>
                      <div className="inline-block text-gray-500 hover:text-gray-700 download">
                        <Download />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
