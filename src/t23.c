#include <stdio.h>

int htoi(char s[]);
int hctoi(char c);

int main(int argc, const char *argv[])
{
  char str[]= "0x1fa9";
  printf("%d\n", htoi(str));
  return 0;
}

int hctoi(char c) {
  char str[] = "aAbBcCdDeEfF";
  int i;
  int ret;

  for (i = 0; str[i] != '\0'; i++) {
    if(c == str[i]) {
      ret = 10 + (i / 2);
    }
  }
  return ret;
}

int htoi(char s[]){
  int i = 0;
  int ret = 0;
  if(s[i] == '0') {
    ++i;
    if(s[i] == 'x' || s[i] == 'X') {
      ++i;
    }
  }
  while(s[i] != '\0') {
    ret = ret * 16;
    if(s[i] >= '0' && s[i] <= '9') {
      ret = ret + (s[i] - '0');
    } else {
      int hc = hctoi(s[i]);
      ret = ret + hc;
    }
    ++i;
  }
  return ret;
}
