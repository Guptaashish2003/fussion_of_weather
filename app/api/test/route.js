import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function GET(res, context) {
    console.log(process.env.BASE_URL,"baseusrl");
    console.log(process.env.DBURL,"dburl");
    const val = process.env.DBURL;
return NextResponse.json({ success: true, message: val}, { status: 200 });

}
