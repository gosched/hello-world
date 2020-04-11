package main

import "net/http"

// HelloWorld .
func HelloWorld(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello world"))
}

// Hello .
func Hello() string {
	return "hello"
}

// World .
func World() string {
	return "world"
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/hello", HelloWorld)
	http.ListenAndServe(":8080", mux)
}
