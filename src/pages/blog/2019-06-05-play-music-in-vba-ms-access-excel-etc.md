---
templateKey: blog-post
title: 'Play Music in VBA (MS Access, Excel, etc)'
date: 2014-03-19T19:01:27.461Z
description: >-
  With great power comes great responsibility.  If you have sufficient
  experience with VBA, I don't see anything here causing you too much
  heartburn.  
featuredpost: false
featuredimage: /img/icon-business-violin.png
---
```vba
Option Explicit
Private Declare Function Beep Lib "kernel32" _
  (ByVal dwFreq As Long, ByVal dwDuration As Long) As Long
Enum Note
  Ab7 = 3322.44
  G7 = 3135.96
  Gb7 = 2959.96
  F7 = 2793.83
  E7 = 2637.02
  Eb7 = 2489.02
  D7 = 2349.32
  Db7 = 2217.46
  C7 = 2093
  B7 = 1975.53
  Bb7 = 1864.66
  A7 = 1760
  Ab6 = 1661.22
  G6 = 1567.98
  Gb6 = 1479.98
  F6 = 1396.91
  E6 = 1318.51
  Eb6 = 1244.51
  D6 = 1174.66
  Db6 = 1108.73
  C6 = 1046.5
  B6 = 987.767
  Bb6 = 932.328
  A6 = 880
  Ab5 = 830.609
  G5 = 783.991
  Gb5 = 739.989
  F5 = 698.456
  E5 = 659.255
  Eb5 = 622.254
  D5 = 587.33
  Db5 = 554.365
  C5 = 523.251
  B5 = 493.883
  Bb5 = 466.164
  A5 = 440
  Ab4 = 415.305
  G4 = 391.995
  Gb4 = 369.994
  F4 = 349.228
  E4 = 329.628
  Eb4 = 311.127
  D4 = 293.665
  Db4 = 277.183
  C4 = 261.626
  B4 = 246.942
  Bb4 = 233.082
  A4 = 220
  Ab3 = 207.652
  G3 = 195.998
  Gb3 = 184.997
  F3 = 174.614
  E3 = 164.814
  Eb3 = 155.563
  D3 = 146.832
  Db3 = 138.591
  C3 = 130.813
  B3 = 123.471
  Bb3 = 116.541
  A3 = 110
  Ab2 = 103.826
  G2 = 97.9989
  Gb2 = 92.4986
  F2 = 87.3071
  E2 = 82.4069
  Eb2 = 77.7817
  D2 = 73.4162
  Db2 = 69.2957
  C2 = 65.4064
  B2 = 61.7354
  Bb2 = 58.2705
  A2 = 55
  Ab1 = 51.9131
  G1 = 48.9994
  Gb1 = 46.2493
  F1 = 43.6535
  E1 = 41.2034
  Eb1 = 38.8909
  D1 = 36.7081
  Db1 = 34.6478
  C1 = 32.7032
  B1 = 30.8677
  Bb1 = 29.1352
  A1 = 27.5
End Enum
Public Sub Play(myNote As Note, mySeconds As Long, Optional times As Integer = 1)
    Dim i As Integer
    If times >= 1 Then
        For i = 1 To times
            Beep myNote, (mySeconds * 1000)
        Next
    End If
End Sub
'Sample usage
Public Sub TwinkleTwinkle()
    Play C5, 1, 2
    Play G5, 1, 2
    Play A6, 1, 2
    Play G5, 2
    Play F5, 1, 2
    Play E5, 1, 2
    Play D5, 1, 2
    Play C5, 2
    Play G5, 1, 2
    Play F5, 1, 2
    Play E5, 1, 2
    Play D5, 2
    Play G5, 1, 2
    Play F5, 1, 2
    Play E5, 1, 2
    Play D5, 2
    Play C5, 1, 2
    Play G5, 1, 2
    Play A6, 1, 2
    Play G5, 2
    Play F5, 1, 2
    Play E5, 1, 2
    Play D5, 1, 2
    Play C5, 2
End Sub
```
