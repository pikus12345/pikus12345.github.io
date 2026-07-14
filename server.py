import http.server
import socketserver
import os
import webbrowser

# Change to the directory containing your portfolio files
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Set up the server
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

# Create and start the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving portfolio at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    
    # Open the browser automatically
    try:
        webbrowser.open(f"http://localhost:{PORT}")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")