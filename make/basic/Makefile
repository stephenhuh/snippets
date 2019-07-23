
output: main.o message.o
	g++ main.o message.o -o output

main.o: main.cc
	g++ -c main.cc

message.o: message.cc message.h
	g++ -c message.cc

clean: 
	rm *.o output

target: dependencies
	action


