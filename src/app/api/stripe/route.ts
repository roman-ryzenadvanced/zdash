// Stripe API route for zdash
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Handle Stripe webhook events
  // Verify webhook signature, process events
  return NextResponse.json({ received: true });
}
