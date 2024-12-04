import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Wimbledon Holiday Home. All rights reserved.</p>
          <p>
            This property is managed by{' '}
            <a 
              href="https://brhproperty.co.uk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary underline"
            >
              BRH Property Management
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 