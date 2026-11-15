from http.server import HTTPServer, SimpleHTTPRequestHandler

HOST = "127.0.0.1"
PORT = 80

# Создаем и запускаем сервер
server = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
print(f"Сервер запущен: http://{HOST}:{PORT}")

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nСервер остановлен.")
    server.server_close()
