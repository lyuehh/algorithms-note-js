#include <stdio.h>

int any(char s1[], char s2[]);

int main(int argc, const char *argv[])
{
  char str1[] = "acbde";
  char str2[] = "cdabe";
  printf("%d\n", any(str1, str2));
  return 0;
}

int any(char s1[], char s2[]) {
  char array[256];

  int i;
  if(s1 == NULL) {
    if(s2 == NULL) {
      return 0;
    } else {
      return -1;
    }
  }

  for (i = 0; i < 256; i++) {
    array[i] = 0;
  }
  while(*s2 != '\0') {
    array[*s2] = 1;
    s2++;
  }

  i = 0;
  while (s1[i] != '\0') {
    if (array[s1[i]] == 1) {
      return i;
    }
    i++;
  }
  return -1;
}
