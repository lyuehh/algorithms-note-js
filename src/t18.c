#include <stdio.h>

int main(int argc, const char *argv[])
{
  int c,
      space_count,
      tab_count,
      line_count;
  int done = 0;
  int lastchar = 0;
  space_count = 0;
  tab_count = 0;
  line_count = 0;

  while(done == 0) {
    c = getchar();
    printf("%c", c);

    if(c == ' ') {
      ++space_count;
    }
    if(c == '\t') {
      ++tab_count;
    }
    if(c == '\n') {
      ++line_count;
    }
    if(c == EOF) {
      done = 1;
    }
  }
  printf("\nSpace Count: %d\n", space_count);
  printf("Tab Count: %d\n", tab_count);
  printf("Line Count: %d\n", line_count);
  return 0;
}
