package main

import "testing"

func TestHello(t *testing.T) {
	if Hello() != "hello" {
		t.Error()
	}
}

func TestWorld(t *testing.T) {
	if World() != "world" {
		t.Error()
	}
}
