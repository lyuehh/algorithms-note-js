#include <stdio.h>
#include <stdlib.h>

void itob(int i, char buf[]);

int main(int argc, const char *argv[])
{
  long number=12345;
  char string[100];
  //itoa(number, string, 2);
  itob(number, string);
  printf("int = %ld, string = %s", number, string);
  return 0;
}

void itob(int i, char buf[]) {
  int j = 0;
  do {
    buf[j++] = i % 2;
    printf("%s\n", buf);
    i /= 2;
  } while(i);
}
