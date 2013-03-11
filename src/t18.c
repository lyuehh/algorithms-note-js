#include <stdio.h>

int main(int argc, const char *argv[])
{
  int c,
      space_count = 0,
      tab_count = 0,
      line_count = 0;
  while(c=getchar() != EOF) {
    printf("%2d", c);
    if(c == ' ') {
      printf("space");
      space_count++;
    } else if(c == '\t') {
      printf("tab");
      tab_count++;
    } else if(c == '\n') {
      printf("line");
      line_count++;
    } else {
      printf("other");
    }
  }
  printf("\nSpace Count: %d\n", space_count);
  printf("Tab Count: %d\n", tab_count);
  printf("Line Count: %d\n", line_count);
  return 0;
}
