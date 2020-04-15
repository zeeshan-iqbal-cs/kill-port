
// C++ Code to demonstrate getppid() 
#include <iostream> 
#include <unistd.h> 
using namespace std; 
  
// Driver Code 
int main() {
    cout << "Parent Process id : " << getpid() << endl;

    while(1);
    
    return 0; 
} 
