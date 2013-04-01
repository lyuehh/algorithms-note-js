/*
   编码实现求给定字符串(全为小写英文字母)的最小后继，如“abc”的最小后继为
   “abd”,“dhz”的最小后继为“di”。
 * */

#include <stdio.h>
#include <string.h>

int min_next_str(char s[]);
int min_next_str2(char s[]);

int main(int argc, const char *argv[])
{
  char s1[] = "abc";
  char s2[] = "aby";
  char s3[] = "abz";
  min_next_str2(s1);
  min_next_str2(s2);
  min_next_str2(s3);
  printf("%s\n", s1);
  printf("%s\n", s2);
  printf("%s\n", s3);
  return 0;
}

int min_next_str(char s[]) {
  int l = strlen(s) - 1;
  while(l >= 0) {
    s[l]++;
    if(s[l] <= 'z') {
      break;
    }
    l--;
  }
  if(l<0) {
    return 1;
  } else {
    s[++l] = '\0';
    return 1;
  }
}

int min_next_str2(char s[]) {
  int l = strlen(s) - 1;
  while(l >= 0) {
    if(s[l] == 'z') {
      l--;
    } else {
      s[l]++;
      break;
    }
  }
  if(l<0) {
    return 1;
  } else {
    s[++l] = '\0';
    return 1;
  }
}
