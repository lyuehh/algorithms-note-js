#include <stdio.h>

#define TRUE 1
#define FALSE 0

int main(int argc, const char *argv[])
{
  int c;
  int done = 0;
  int inspace = 0;
  while(done == 0) {
    c = getchar();
    if(c == ' ') {
      if(inspace == 0) {
        inspace = 1;
        putchar(c);
      }
    }
    if(c != ' ') {
      inspace = 0;
      putchar(c);
    }

    if(c == EOF) {
      done = 1;
    }
  }

  return 0;
}
