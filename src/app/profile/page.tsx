            import Image from "next/image"
            import gmailLogo from "../../../public/img/icons8-google.svg";
            export default function Login() {
                    return (
                        <>
                            <div className="min-h-screen ">
                                <div className="container mx-auto pt-16 pb-8">
                                    {/* Profile Header */}
                                    <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <Image src={gmailLogo} alt="Gmail Icon" width={16} height={16} className="inline-block mr-2"/>
                                        <div className="ml-4">
                                        <h1 className="text-2xl font-semibold">Your Name</h1>
                                        <p className="text-gray-500">@username</p>
                                        </div>
                                    </div>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                                            Edit Profile
                                        </button>
                                    </div>
                                    <div className="flex justify-end">
  <div className="bio-box border border-gray-300 bg-black-100 p-4 max-w-6xl flex">
    {/* Left box with 60% width */}
    <div className="w-60">
      {/* Content for the left box */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>

    {/* Divider line */}
    <div className="w-1 bg-gray-300 mx-4"></div>

    {/* Right box with 40% width */}
    <div className="w-40">
      {/* Content for the right box */}
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
                            </div>
                        </div>
                        </>
                    )
                }