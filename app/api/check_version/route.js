import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.github.com/repos/mptwaktusolat/app_waktu_solat_malaysia/releases/latest',
        {
            next: {
                revalidate: 3 * 60 * 60, // 3 hours
            }
        }
    );
    const data = await response.json();
    const tag = data.tag_name;

    const version = tag.split('+')[0];
    const buildNumber = parseInt(tag.split('+')[1]);

    return NextResponse.json({
        tag: tag,
        releaseTitle: data.name,
        version: version,
        buildNumber: buildNumber,
        publishedAt: data.published_at,
    });
}