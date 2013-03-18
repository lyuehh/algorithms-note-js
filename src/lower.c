#include <stdio.h>

char lower(char c);

int main(int argc, const char *argv[])
{
  printf("%c\n", lower('A'));
  return 0;
}

char lower(char c) {
  if(c >= 'A' && c <= 'Z') {
    return c + 'a' - 'A';
  } else {
    return c;
  }
}
