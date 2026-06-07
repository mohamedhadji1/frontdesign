import { NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    let limitParam = parseInt(searchParams.get('limit') || '3');
    
    // Safety: bound the limit to prevent resource exhaustion
    if (isNaN(limitParam) || limitParam < 1) limitParam = 3;
    if (limitParam > 50) limitParam = 50;

    const db = getAdminDb();

    if (type === 'events') {
      const snapshot = await db.collection('events')
        .orderBy('date', 'asc')
        .limit(limitParam)
        .get();
        
      const events = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          date: data.date,
          createdAt: data.createdAt
        };
      });
      return NextResponse.json(events);
    }

    if (type === 'news') {
      const snapshot = await db.collection('news')
        .orderBy('date', 'desc')
        .limit(limitParam)
        .get();
        
      const news = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          date: data.date,
          image: data.image,
          excerpt: data.excerpt,
          link: data.link,
          createdAt: data.createdAt
        };
      });
      return NextResponse.json(news);
    }

    return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
  } catch (error) {
    console.error('Public Data API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}