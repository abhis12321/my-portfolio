import { cookies } from "next/headers";
import { NextResponse } from "next/server"


export const GET = () => {
    try {
        let theme = cookies().get("theme")?.value;
        if(!theme) {
            cookies().set("theme" , "dark");
        } else {
            cookies().delete("theme");
        }
        return NextResponse.json({ success: true , message: "theme updated." });
    } catch(error) {
        return NextResponse.json({ success: false , error: error.message });
    }
}