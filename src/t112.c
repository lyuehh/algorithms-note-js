#include <stdio.h>

#define IN 1
#define OUT 0
int main(int argc, const char *argv[])
{
  int c,
      nw,
      state = OUT;
  while((c = getchar()) != EOF) {
    if(c != ' ' && c != '\t' && c != '\n') {
      putchar(c);
    } else {
      putchar('\n');
    }
  }
  return 0;
}
