Українська локалізація Nintendo-версії «Коли плачуть чайки»

# Український патч для «Коли плачуть чайки»

## Автори

- Керівник команди та головний перекладач — Shreibikus
- Робота з графікою — Lisper
- Допомога з перекладом — adncoach і up3rifania

Відповідальні за англійську версію, без якої б не було й української.

- [@andOlga](https://github.com/andOlga), main contributor of this project.
- My beloved heart, Tara, who was the brightest star that ever shone in my life. Rest in peace, my love.
- [@DoctorDiablo](https://github.com/doctordiablo), translating the Witch Hunter's Interview Tape story.
- [@silverwolf-waltz](https://github.com/silverwolf-waltz), helping port over the translations for Hane and Saku.
- [@Quplet](https://github.com/quplet), providing help with porting some of the main episodes.
- [@DerJaybe](https://github.com/DerJaybe), helping with translating images and creating the project logo.
- [LHCollider](https://www.youtube.com/@LHCollider), helping with testing.

Інструменти та ресурси, без яких би не було цього проекту:

- [kaleido](https://gitlab.com/Neurochitin/kaleido/-/tree/saku/) by Neurochitin, which can decompile and recompile the SNR script format used by the game, as well as generate the `patch.rom` files that can be used to replace files in the base game.
- [enter_extractor](https://github.com/07th-mod/enter_extractor) by TellowKrinkle, which can extract files from the base game's `data.rom` format, as well as generate `pic` and `txa` files used to store the game's images.
- [HigurashiENX](https://github.com/masagrator/HigurashiENX) by MasaGratoR, which is a similar translation patch for the console version of Higurashi. Specifically, the IPS patch generation scripts from that project were used to translate some of the text hardcoded into the executables of the game.
- [Umineko Project](https://umineko-project.org), a similar translation work done for the PS3 version of Umineko, which serves as the base for the translated script and images used in the patch.
- [Umineko Tsubasa English Patch](https://uminekotsubasa.github.io/), which served as the initial source for the translation of the Tsubasa arcs present in the PC version (these were *heavily* edited to be consistent with the main story as well as with each other).
- ArsMagica's English patch for Hane, now lost to time, which served as the initial source for the translation of the Hane arcs.
- [The 07th-Expansion wiki](https://07th-expansion.fandom.com/wiki/07th_Expansion_Wiki), which had a translation for Our Confession as well as most of the new Tsubasa stories.
- A random person who just showed up on the Hinamizawa Discord one day with the nickname of "last-note", dumped a full translation of Last Note, and left.
- The original translation of the PC version of Umineko by [The Witch Hunt](https://witch-hunt.com). While their work isn't being used directly, without these people Umineko would have never made it to the West in any form at all.
- And, of course, the game itself, created by 07th-Expansion and producted (sic) by Entergram. Please [buy the game](https://google.com/search?q=うみねこのなく頃に咲～猫箱と夢想の交響曲～) to support the creators.
  - There are also a few various versions of Umineko native to PC. How good they are varies depending on the version you dig up, but none of them properly support the creators, none of them are compatible with this patch, and all of them have various missing content compared to the console release of the game.
    - This includes the Steam version, as it is a re-release of the old indie version of Umineko, and as such does not include any of the console version's improvements. Because of this, buying this release does not help support the creators of the console version in any way, though it *does* help support the author and the original creator of the series, Ryukishi07. The Steam version is also not compatible with this patch.

## Нанесення патчу

Ninendo-версію можна грати декількома способами:
- На ПК за допомогою емуляторів yuzu чи Ryujinx
- На Mac за допомогою Ryujinx
- На деяких пристроях Android за допомогою yuzu
- На Nintendo з прошивкою CFW за допомогою Atmosphère

### На ПК (yuzu)
yuzu is compatible with the game and the patch.

To set yuzu up, you will need a copy of your encryption keys dumped from a CFW-capable console, and the game itself. Once you have acquired the keys, navigate to File -> Open yuzu folder, then find the subfolder called "keys" inside that and paste the file there. Restart yuzu and double-click the giant empty rectangle in the main yuzu window to add your game folder.

To install the patch, [download](https://github.com/andOlga/umineko-catbox-english/releases/latest/download/patch_yuzu.zip) the yuzu version,
<br>then right-click the game in yuzu, choose "Open Mod Data Location" and extract the entire archive there.

You may now start the game in yuzu and play it in English.

### На PC/Mac (Ryujinx)
Ryujinx is compatible with the game and the patch.

To set Ryujinx up, you will need a copy of your encryption keys dumped from a CFW-capable console as well as that console's firmware, and the game itself. Having acquired these, you may follow their Guide to finish your configuration and add the game to Ryujinx, but please ignore the "Managing mods" section as this patch has a somewhat more complicated structure and cannot be simply added to a per-game folder like they recommend.

To install the patch, [download](https://github.com/andOlga/umineko-catbox-english/releases/latest/download/patch_atmos.zip) the Atmosphère version (Ryujinx is 100% Atmosphère-compatible),
<br>then choose File -> Open Ryujinx Folder. Navigate to the "mods" directory and extract the entire archive to that location. If the "mods" directory does not exist, create it first.

You may now start the game in Ryujinx and play it in English.

### На Android (yuzu)
Some Android devices may be able to run the game using yuzu's Android port, though the current system requirements are rather high by Android standards: the device has to have a Snapdragon CPU and at least 8GB of RAM.

Just like on PC, you will need a copy of your encryption keys. yuzu will ask you for their location on its first run. It will also ask you to specify the folder in which the game is located. For performance reasons, I recommend not putting the game on an SD card unless you absolutely have to, keep it in your internal storage.

Once the initial setup is done, **run the base game (in Japanese) at least once and exit it**. This will allow you to confirm that your device can actually run the game, and also create some required files necessary for the patch installation to work.

You may now [download](https://github.com/andOlga/umineko-catbox-english/releases/latest/download/patch_yuzu.zip) the yuzu version of the patch,<br>and extract it somewhere on your device.

Now return to yuzu, and in the settings menu tap "Open yuzu folder". Pull out the menu on the left, switch to "Internal Storage" (or "SD Card") and find the extracted mod files. Tap and hold the `UminekoCatboxEnglish` folder to select it, and choose "Copy to..." from the kebab menu on top. Pull out the left panel again, tap "yuzu" and navigate to `load/01006A300BA2C000/`, then click the "Copy" button to install the patch.

The next time you start the game, it will be in English.

### На Nintendo

If you want to play the game on your console, it will need Atmosphère installed on it.
If you don't have Atmosphère already, please see if it's compatible with your console model and install it if it is.
Afterwards, [download](https://github.com/andOlga/umineko-catbox-english/releases/latest/download/patch_atmos.zip) the Atmosphère version of the patch and copy it to the "atmosphere" folder on your SD card.
The next time the game starts, it should be in English.
