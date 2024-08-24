import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function GET(res, context) {
    console.log(process.env.BASE_URL,"baseusrl");
    console.log(process.env.DBURL,"dburl");
return NextResponse.json({ success: true, message: "Hello World" }, { status: 200 });

}
