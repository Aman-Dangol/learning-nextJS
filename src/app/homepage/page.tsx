import { Redirect } from "next";

import { permanentRedirect } from "next/navigation";

export default function page() {
  return (
    <div>
      <a href="/homepage/temporary/">temporary redirect</a> <br />
      <form action={"/homepage/temporary"} method="GET">
        <label htmlFor="">name</label>
        <input type="text" name="" id="" className="border-red-400" />
      </form>
    </div>
  );
}
