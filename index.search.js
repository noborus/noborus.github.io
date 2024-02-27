var relearn_search_index = [
  {
    "breadcrumb": "",
    "content": " Products trdsql Star Fork A tool that can execute SQL on CSV, LTSV, JSON, TBLN files\ntrdsql Blog Created a command line tool called trdsql(Qiita) trdsql is a tool to import CSV, LTSV, JSON into DB (PostgreSQL, MySQL)(Zenn) trdsql Category(Blog) ov Star Fork Feature-rich terminal Pager\nA terminal pager that can be used as an alternative to less or more.\nov pages Introduction to ov(Zenn) Terminal Pager New Era(Qiita) Alternatives to popular CLI tools: more ov Category(Blog) ovcs Star Fork A client/server version of Terminal Pager ov.\nBy combining terminal pager with client/server and tmux, it became the strongest SQL client mdviewer Star Fork View markdown in pager.\ntbln Star Fork Libraries and tools that handle file formats (tbln) that are compatible with database tables.\ntbln.dev psutilsql Star Fork A tool that executes SQL to display system information.\nmdtsql Star Fork A tool to execute SQL against a markdown table.\nmdtsql Category xlsxsql Star Fork A tool that executes SQL against an Excel file.\npgsp Star Fork CLI tool to monitor and display pg_stat_progress of PostgreSQL.\npgsp Category go-textra Star Fork\nMin’na no Jidou Hon’yaku@textra’s Library for client API.\njpug-doc-tool Star Fork\nJapanese manual translation tool for PostgreSQL.\njpug-doc Category guesswidth Star Fork Library tool to infer column widths in CLI output.\nGuess the width of the width format Guess the width of the width-specified format sqlss Star Fork Split SQL into statements.\nParticipating projects jpug-doc A repository for translating PostgreSQL manuals.\n(Qiita) About the PostgreSQL Japanese manual PostgreSQL Japan User Group (Annex) Site with the latest version of the translated manual github taiyaku PostgreSQL Manual Bilingual Collection ",
    "description": "",
    "tags": null,
    "title": "Top",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Top",
    "content": "English tag trdsql v0.13.0 ov v0.32.1 trdsql v0.12.1 trdsql v0.12.0 ov v0.32.0 ov v0.31.0 psqlのPAGERを設定する ov v0.30.0 Guess the width of the width-specified format trdsql v0.11.1 ov v0.15.0 ov v0.14.2 ov v0.14.1 ov v0.14.0 ov v0.12.0 PostgreSQLで0列の扱い trdsql jq構文 ov v0.11.1 ov v0.11.0 手っ取り遅くSQLを学ぶ Another way to aggregate json(jq + SQL) trdsql v0.10.0 第32回 PostgreSQLアンカンファレンス@オンラインで発表しました ov v0.10.0 trdsql v0.9.1 ov v0.9.6 Jpug-doc-tool ov v0.9.5 trdsql+PostgreSQL 14でJSONを処理する ov v0.9.4 mdtsql v0.0.3 pgsp trdsql v0.9.0 ov v0.9.0 ov v0.8.1 trdsql v0.8.0 ov v0.8.0 goのTUIについて2020年最終版 ov v0.7.0 SQLのORDER BY 列番号と式 tcell/tviewでTUIを作るならキー割り当てにcbindを利用しよう ov v0.6.2 ov v0.5.0 ov v0.2.0 tcellについて2 tcellについて goのTUIについて ov v0.1.3 ov GoのTUIで表示が崩れる場合 trdsql 0.7.5 trdsql output trdsql 圧縮ファイル MySQL の LOAD DATA INFILE (go) trdsql 0.7.4 trdsql CASE式 trdsql 合計を行に追加する trdsql convert log trdsql generate_series trdsql CROSS JOIN trdsql config trdsql SQLファイル指定 trdsql ライブラリ使用 trdsql グラフ trdsql 差分、比較 trdsql JSON出力 trdsql JSON解析 trdsql 日付・時刻処理 trdsql Window関数 trdsql 列の編集 trdsql ファイルとテーブルのJOIN trdsql JOIN trdsql DBインポート trdsql SQLite3エンジンの使用 trdsql MySQLエンジンの使用 trdsql PostgreSQLエンジンの使用 trdsql 処理の概要 trdsql 標準入力 trdsql ワイルドカード、圧縮ファイル trdsql Log集計 trdsql GROUP集計 trdsql 集計計算 trdsql 集計 trdsql 簡単なSQL その２ trdsql 簡単なSQL trdsql ファイルフォーマット変換 trdsql インストール ",
    "description": "",
    "tags": null,
    "title": "Blog",
    "uri": "/blog/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "This is the setting for psql, a client tool for PostgreSQL.\npsql This is the recommended setting for PSQL_PAGER. Header 1 is specified(-H1),\"|\" is used to separate columns(-d \"|\"), and column mode(-C) is set. If it fits on the screen, exit the pager(-F). It is also recommended to change the color of the columns(--column-rainbow).\nPSQL_PAGER 'ov -F -C -d \"|\" -H1 --column-rainbow'The following sets the header style of config.yaml.\nStyleHeader: Background: \"#23274f\" Bold: true StyleColumnHighlight: Foreground: \"lightcyan\" Reverse: true StyleAlternate: Background: \"#2a2a2a\" watch(PostgreSQL 15) A pager is available for WATCH from PostgreSQL version 15. This is the recommended value for PSQL_WATCH_PAGER. Continues to display the last section separated by blank lines.\nPSQL_WATCH_PAGER 'ov --follow-section --section-delimiter \"^$\"' expanded output (\\x) Even when displaying in the extended output (\\x), if the record delimiter is treated as a section delimiter, the display when moved will be easier to see.\nPAGER='ov -F --section-delimiter \"^-\"' You can also display expanded output (\\x) with \\watch.\nunaligned (\\a) Even in unaligned display, it is displayed comfortably by using column highlighting.\nThe PAGER specification does not change with the following.\nPSQL_PAGER='ov -F -C -d \"|\" -H1'. ",
    "description": "PostgreSQL client tool psql with ov",
    "tags": [
      "ov",
      "psql"
    ],
    "title": "psql",
    "uri": "/ov/psql/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "Install For Linux/Windows/macOS, Download. It is made in Go and has no other dependent libraries, so it can be deployed and executed immediately.\nDocker If Docker is available, you can also run it with Docker. You can also use docker pull from Docker Hub, so please pull as follows.\ndocker pull noborus/trdsql Mount and use the input file location. Since the result is output to the standard output, it can be received by redirection as it is.\nWhen executing for test.csv in the current directory, it will be as follows.\ndocker run --rm -it -v $(pwd):$(pwd) --workdir $(pwd) noborus/trdsql \"SELECT * FROM test.csv\" \u003e test_new.csv Homebrew You can install it with:\nbrew tap noborus/trdsql brew install trdsql go get If you have a go build environment, you can build it yourself.\ngo get -u -d github.com/noborus/trdsql cd trdsql make I don’t think it would be difficult to build for your own environment, but if you want to cross-compile, you should check the dependent go-sqlite3 uses cgo so you have to be careful.\nExecution Execute from the terminal.\ntrdsql [OPTIONS] [SQL command] The SQL command specifies a database table, but you can simply specify a file instead of a table.\n",
    "description": "How to install trdsql",
    "tags": [
      "trdsql",
      "install",
      "docker"
    ],
    "title": "trdsql install",
    "uri": "/trdsql/01_install/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "Git calls pager when needed. Git output will be easier to use if each is separated by section-delimiter. Also, it is recommended to set the jump-target to “section” accordingly.\nIt is recommended to set the following in gitconfig.\n[core] pager = \"ov -F\" [pager] diff = \"ov -F --section-delimiter '^diff' --section-header\" log = \"ov -F --section-delimiter '^commit' --section-header-num 3\" show = \"ov -F --header 3\"(Please add --jump-target \"section\" if you like)\ngit log The git log is separated by commit. You will be able to move by commit unit.\ngit diff git diff is separated by diff or file. You will be able to move in diff units. You can move to the next section (space key) or previous section (^ key) in one go.\nFurthermore, by specifying --section-header, the diff file name will be displayed even if you scroll.\nsearch The above settings will display the search results in commit units. Normally, the search results are displayed at the top, so if it is in the middle of the line, you need to go back, but it will be displayed from the beginning of the commit.\n",
    "description": "Use ov as a pager for git",
    "tags": [
      "ov",
      "git"
    ],
    "title": "git",
    "uri": "/ov/git/index.html"
  },
  {
    "breadcrumb": "Top",
    "content": " Download This is the document of trdsql, a tool that can execute SQL on CSV, LTSV, JSON, TBLN files.\noverview trdsql is a CLI tool that executes SQL on text in table format. A tabular format is data that consists of rows and columns, such as:\n1 column 2 columns 1 row a1 a2 2 lines b1 b2 Since the results can be output in various formats, it can also be used for format conversion of tabular data.\ntable of contents trdsql install trdsql File format conversion trdsql Easy SQL trdsql simple SQL 2 trdsql Aggregation trdsql aggregation calculation trdsql GROUP aggregation trdsql Log aggregation trdsql wildcard, compressed file trdsql 標準入力 trdsql 処理の概要 trdsql PostgreSQLエンジンの使用 trdsql MySQLエンジンの使用 trdsql SQLite3エンジンの使用 trdsql DBインポート trdsql JOIN trdsql ファイルとテーブルのJOIN trdsql 列の編集 trdsql Window関数 trdsql 日付・時刻処理 trdsql JSON解析 trdsql JSON出力 trdsql 差分、比較 trdsql グラフ trdsql ライブラリ使用 trdsql SQLファイル指定 trdsql config trdsql CROSS JOIN trdsql generate_series trdsql convert log trdsql 合計を行に追加する trdsql CASE式 trdsql 圧縮ファイル trdsql output trdsql jq構文 trdsql For fixed width ",
    "description": "trdsql - Execute SQL on CSV, LTSV, JSON, YAML, TBLN and etc.",
    "tags": null,
    "title": "trdsql",
    "uri": "/trdsql/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "TRDSQL describes files such as CSV as a tool for processing SQL, but can also be used as a tool for simply converting file formats.\nIn that case, SQL is enough to remember the following fixed phrases. Output all rows and columns in the file.\nSELECT * FROM fileNameAfter that, if you specify the input format (-i …) and the output format (-o …) as the option, you can convert the file format. CSV, LTSV, JSON, etc. can be converted.\nThe conversion from CSV (-icsv) to LTSV (-oltsv) is as follows.\ntrdsql -icsv -oltsv \"SELECT * FROM fileName\" CSV header If the CSV file has a column name on the header, the header can be interpreted with -ih and used as a column name.\nheader.csv\nid,name 1,Orange 2,Melon 3,Appletrdsql -icsv -ih -oltsv \"SELECT * FROM header.csv\" \u003e test.ltsv test.ltsv\nid:1\tname:Orange id:2\tname:Melon id:3\tname:AppleIf there is no header, the column name will be c1, c2, c3 …\nLTSV input If you use the LTSV output above for input, you will return to CSV.\ntrdsql -iltsv -ocsv -oh \"SELECT * FROM test.ltsv\" id,name 1,Orange 2,Melon 3,AppleChange of separation characters（TSV） Also, as CSV is sometimes called Character-separated values instead of Comma-Separated Values, you can use anything other than “,” as a delimiter.\nYou can change it by specifying the text after the -ID option. For tab delimited (also known as TSV) use “\\t”.\nThe following will be changed from TSV to CSV.\ntrdsql -icsv -id \"\\t\" -ih \"SELECT * FROM test.tsv\" JSON出力 JSON output prints the entire JSON as an array.\ntrdsql -icsv -ih -ojson \"SELECT * FROM header.csv\" [ { \"id\": \"1\", \"name\": \"Orange\" }, { \"id\": \"2\", \"name\": \"Melon\" }, { \"id\": \"3\", \"name\": \"Apple\" } ]JSON input JSON in trdsql expects a format consisting of rows and columns. One is a format with an array at the top and containing a name and a value, as in the output above.\nThe other is a format called NDJSON,LDJSON or JSONL, where one line is one line as shown below.\n{\"id\":\"1\",\"name\":\"Orange\"} {\"id\":\"2\",\"name\":\"Melon\"} {\"id\":\"3\",\"name\":\"Apple\"}If such a column is the same, it can be entered like CSV or LTSV.\ntrdsql -ijson -ocsv \"SELECT * FROM test.json\" (Because JSON’s objects are unprecedented, the order of columns may be different as Name, ID.)\nOther output If it is only output, it can be output as a mark -down table (equivalent to a tool called CSV2MD, JSON2MD, or LTSV2MD) because it supports more formats.\ntrdsql -icsv -ih -ovf \"SELECT * FROM header.csv\" | id | name | |----|--------| | 1 | Orange | | 2 | Melon | | 3 | Apple |You can display files that are long and hard to see with CSV files with many columns and display them vertically in Vertical format.\ntrdsql -icsv -ih -ovf \"SELECT * FROM header.csv\" ---[ 1]----------------------------------------------------- id | 1 name | Orange ---[ 2]----------------------------------------------------- id | 2 name | Melon ---[ 3]----------------------------------------------------- id | 3 name | AppleUsed format | Format | input | Output | Note | |: —– |: —-: |: —: |: ——- | | CSV | ○ | ○ | TSV etc. correspond to options | | LTSV | ○ | ○ | [Ltsv.org] (http://ltsv.org) | | JSON | ○ | ○ | [www.json.org] (www.json.org) | | JSONL | ○ | ○ | Input is possible with JSON | | Tbln | ○ | ○ | [tbln.dev] (https://tbln.dev) | | RAW | × | ○ | Output as it is (do not process escape) | | MD | × | ○ | Markdown table | | At | × | ○ | ASCII table | | VF | × | ○ | Vertical format |\nCSV id,name 1,Orange 2,Melon 3,AppleLTSV id:1\tname:Orange id:2\tname:Melon id:3\tname:AppleJSON [ { \"id\": \"1\", \"name\": \"Orange\" }, { \"id\": \"2\", \"name\": \"Melon\" }, { \"id\": \"3\", \"name\": \"Apple\" } ]JSONL {\"id\":\"1\",\"name\":\"Orange\"} {\"id\":\"2\",\"name\":\"Melon\"} {\"id\":\"3\",\"name\":\"Apple\"}TBLN ; name: | id | name | ; type: | text | text | | 1 | Orange | | 2 | Melon | | 3 | Apple |RAW id,name 1,Orange 2,Melon 3,AppleMD | id | name | |----|--------| | 1 | Orange | | 2 | Melon | | 3 | Apple |AT +----+--------+ | id | name | +----+--------+ | 1 | Orange | | 2 | Melon | | 3 | Apple | +----+--------+VF ---[ 1]------------------------------------------------------------------- id | 1 name | Orange ---[ 2]------------------------------------------------------------------- id | 2 name | Melon ---[ 3]------------------------------------------------------------------- id | 3 name | Apple",
    "description": "trdsql file format conversion",
    "tags": [
      "trdsql",
      "csv2ltsv",
      "ltsv2csv",
      "csv2json",
      "json2csv"
    ],
    "title": "trdsql File format conversion",
    "uri": "/trdsql/02_convert/index.html"
  },
  {
    "breadcrumb": "Top",
    "content": "Feature-rich terminal pager Download Note Please refer to the github for installation and settings.\nFeatures ov provides more convenient functions by separating text, not just the pager function to display at terminal size. It is particularly suitable for displaying table-formatted text.\nCan open large files quickly. Supports fixed header line display (both wrapped and unwrapped). Supports column mode that recognizes columns by delimiter. In column mode, there is a column rainbow mode that colors each column. Supports fixed-width columns instead of delimiters. Supports section division by delimiter, and movement by section. Supports header lines of sections, and the header line can be multiple lines. Can dynamically switch between wrapping and not wrapping. Supports alternate row styling. Shortcut keys are customizable. Decorative styles are customizable. Supports follow mode (like tail -f). Supports follow mode by file name (like tail -F). Supports follow section that is displayed when the section is updated. Supports following multiple files and switching when updated (follow-all). Supports execution of commands that display stdout and stderr separately (exec). Supports watch mode that periodically reads files. Supports watch in exec mode (equivalent to watch command). Supports incremental search and regular expression search. Supports multi-color that highlights multiple words individually. Better support for Unicode and East Asian widths. Supports compressed files (gzip, bzip2, zstd, lz4, xz). Use case psqlPostgreSQL client tool psql with ov\ngitUse ov as a pager for git\ndeltaov can also be used as a pager for delta.\nmysqlUse 'ov' as a pager for mysql\npgcliUse 'ov' as a pager for pgcli\nmycliUse 'ov' as a pager for mycli\npsUse 'ov' as a pager for ps\nmanUse 'ov' as a pager for man pages\ntopUse 'ov' as a pager for top\nprocsUse 'ov' as a pager for procs\nbatov can also be used as a pager for bat.\nWatch files with ovFile monitoring (watch) with ov\nview csvov can also be used as a csv viewer.\nView markdownov can also be used as a markdown viewer.\nmultiple filesDisplay multiple files\nMulticolor highlights multiple wordsov can highlight multiple words in multiple colors.\nspeed of opening large filesspeed of opening large files\nexecute commandov can execute commands and display the output.\nHow to use follow modeHow to use follow mode of ov\nHow to use sectionHow to use section of ov\nMemory managementMemory management of ov\n",
    "description": "ov - Feature-rich terminal pager",
    "tags": "ov",
    "title": "ov",
    "uri": "/ov/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "delta supports pager.\ndelta is often specified as git’s pager, but the pager is actually called from within delta.\nTherefore, delta settings are often specified by writing them in gitconfig. This is an example of gitconfig settings.\n[core] # delta will used as the default pager for git # and ov as the default pager for delta # the pager will be overloaded via the [pager] section for a few commands pager = delta --pager='ov -F' [pager] # overload delta pager for some commands show = delta --pager='ov -F --header 3' # We are now overloading some commands via \"delta features\" # This allows us to use different pager per git command # It allows to maintain a simpler config file and avoid escaping quotes diff = delta --features ov-diff log = delta --features ov-log [delta] navigate = true side-by-side = true file-style = yellow # we define the delta feature \"ov-diff\" we are using for git diff [delta \"ov-diff\"] # the idea is to overload the pager used by delta when using git diff # we are using the same pattern used by delta when the default pager (less) is used # using ov section feature brings a better experience pager=ov -F --section-delimiter '^(commit|added:|removed:|renamed:|Δ)' --section-header --pattern '•' # we define the delta feature \"ov-log\" we are using for git log [delta \"ov-log\"] # the idea is to overload the pager used by delta when using git log # using ov section feature brings a better experience pager=ov -F --section-delimiter '^commit' --section-header-num 3This setting allows you to mark the necessary locations as section for ov when using delta.\nBy combining these settings, you can move files by file (space key of ^ key) and diff by n/N key.\nFurthermore, even if you move a line, the difference file name can be displayed.\n",
    "description": "ov can also be used as a pager for delta.",
    "tags": [
      "ov",
      "git",
      "delta"
    ],
    "title": "delta",
    "uri": "/ov/delta/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "By using trdsql and simple SQL, you can do something that can be done by combining other UNIX tools.\nFile analysis If you want to run a simple SQL from SELECT * FROM, you need to know the column name in advance. If you execute the file name to the -a option to the -a option, it will analyze the file and output information. (If the extension of the CSV file is like .csv, -icsv can be omitted. Interpreting the-ih header, specifying the number of skips -is, etc. If necessary.If you do not attach it, it may be an unintended analysis result).\ntrdsql -ih -a header.csv The table name is header.csv. The file type is CSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | id | text | | \\`name\\` | text | +-------------+------+ Data samples: +----+----------+ | id | \\`name\\` | +----+----------+ | 1 | Orange | +----+----------+ Examples: trdsql -ih \"SELECT id, \\`name\\` FROM header.csv\" trdsql -ih \"SELECT id, \\`name\\` FROM header.csv WHERE id = '1'\" trdsql -ih \"SELECT id, count(id) FROM header.csv GROUP BY id\" trdsql -ih \"SELECT id, \\`name\\` FROM header.csv ORDER BY id LIMIT 10\"Use of Examples The SQL that can be actually executed is output to Examples.\nSQL has a reservation word, and the column name that must be escaped, such as using a reservation word in the column name or using a column name other than lowercase letters, is escaped as described above (\\ by the database).`\" Or “”). When using from the command line, add “\" to escape from the shell, and surround it with “\\ ‘”.\n(The reserved word is changed depending on the implementation and version of SQL, but there is no problem to escape other than the reservation word, so the unnecessary words are escaped.)\nHere we will execute one of Examples.\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv\" 1,Orange 2,Melon 3,AppleThe same result as select * from header.csv.\nWe will change this SQL as a dedicated type.\nSort of columns, column extractions This time, change the order of id, name, and output in the order of name, id.\ntrdsql -ih \"SELECT \\`name\\`,id FROM header.csv\" Orange,1 Melon,2 Apple,3That’s right.So you don’t need an id, so if you want to output only name, you need to leave only the name.\ntrdsql -ih \"SELECT \\`name\\` FROM header.csv\" Orange Melon AppleIt’s too easy to get angry, but if you use the UNIX tool, AWK or CUT will be the content of the explanation.\nSorting line If you have something else to sort, it’s a line. You can sort lines with ORDER BY column name. Ascending order (small → large) is ASC (default so can be omitted), descending order (large → small) is DESC.\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv ORDER BY \\`name\\`\" 3,Apple 2,Melon 1,Orangetrdsql -ih \"SELECT id, \\`name\\` FROM header.csv ORDER BY id DESC\" 3,Apple 2,Melon 1,OrangeActually, this may not be sorted as intended. In trdsql, input data such as CSV, LTSV, JSON, etc. works as a text type. In the case of id here, if id is not treated as a number, the result will be unintended when it is more than two digits.\nTo treat as a number, use CAST (column name AS type name) in SQL as follows.\ntrdsql -ih \"SELECT id,\\`name\\` FROM header.csv ORDER BY CAST(id AS int) DESC\" Furthermore, when combined with ORDER BY, LIMIT is often used. LIMIT can be used to limit the output to the specified number of cases. It is used when you want to output only one or only the top 10.\ntrdsql -ih \"SELECT id,\\`name\\` FROM header.csv ORDER BY CAST(id AS int) DESC LIMIT 1\" 3,Apple",
    "description": "How to use a simple SQL of trdsql",
    "tags": [
      "trdsql",
      "sql",
      "cut",
      "sort"
    ],
    "title": "trdsql Easy SQL ",
    "uri": "/trdsql/03_sql/index.html"
  },
  {
    "breadcrumb": "Top",
    "content": " Noboru Saito's Page. I am a freelance programmer.\nLinks GitHub: https://github.com/noborus Reddit: https://www.reddit.com/user/noborusai/ mail: noborusai+dm@gmail.com ",
    "description": "Noboru Saito",
    "tags": null,
    "title": "About",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can be used as a pager for mysql or MySQL Shell.\nUse the –pager option with the mysql client.\nmysql --pager='ov -w=f -H3 -F -C -d \"|\"' You can also write in ~/.my.cnf.\n[client] pager=ov -w=f -H3 -F -C -d \"|\" The header line for mysql is 3, but it’s surrounded by a separator line. You can increase the display area by setting the skip line to 1 and the header to 1.\nov -w=f --skip-lines 1 -H1 -F -C -d \"|\"' For mysqlsh, use the --pager option or set it while mysqlsh is running. For example, in js mode, it can be made persistent by the following command.\nshell.options.setPersist(\"pager\",\"ov -H1 --skip-lines 1 -C -w=false -d'|' -F\")SQL mode and Python mode.\n\\option --persist pager \"ov -w=f -H1 --skip-lines 1 -F -C -d '|'\" ",
    "description": "Use 'ov' as a pager for mysql",
    "tags": [
      "ov",
      "mysql"
    ],
    "title": "mysql",
    "uri": "/ov/mysql/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "Search condition Last time, we sorted columns, extracted, and sorted rows, so this time we will extract rows. To extract rows, add WHERE and write the search condition.\nWe will use the same example file as last time.\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv WHERE id=1\" 1,OrangeThis is the main feature of SQL. Just write the search condition and you can output the corresponding rows.\nAND, OR You can write complex conditions by using AND, OR, and () parentheses.\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv WHERE id='1' OR id='2'\" 1,Orange 2,Melontrdsql -ih \"SELECT id, \\`name\\` FROM header.csv \" \"WHERE (id='1' OR id='2') AND \\`name\\`='Orange'\" 1,OrangeAs mentioned last time, trdsql treats the values of CSV, LTSV, and JSON as text types. Therefore, when you write the condition with “=”, you don’t have to be aware of the type so much, but when you specify the range, the result will change, so you need to CAST.\ntrdsql -ih \"SELECT id,\\`name\\` FROM header.csv \" \"WHERE CAST(id as int)\u003e1\" 2,Melon 3,AppleWhen using SELECT, you can use CAST in the column specification to specify the CAST column for the search condition or ORDER BY.\nIn that case, the original column name refers to the column before CAST, so use AS alias to use the column name after CAST (you can give the original name to the column name after CAST).\ntrdsql -ih \"SELECT CAST(id AS int) AS id,\\`name\\` FROM header.csv WHERE id\u003e1\" 2,Melon 3,AppleIN IN is a convenient operator that allows you to specify multiple values in a single condition.\ntrdsql -ih \"SELECT * FROM header.csv WHERE id IN ('1','3')\" 1,Orange 3,AppleIN can also be used to specify multiple columns at once.\ntrdsql -ih \"SELECT * FROM header.csv WHERE 'Apple' IN (id,name)\" 3,Apple",
    "description": "trdsql simple SQL 2",
    "tags": [
      "trdsql",
      "sql",
      "WHERE"
    ],
    "title": "trdsql simple SQL 2",
    "uri": "/trdsql/04_sql2/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can be set as a pager for pgcli.\n~/.config/pgcli/config\npager = 'ov -C -d \"|\" --skip-lines 1 -H1'In pgcli, you can display multiple results. In such cases, it is convenient to use section headers instead of fixed header lines. By setting table_format to psql_unicode, a frame is displayed in Unicode, allowing you to specify the separation of query results. You set the section header by specifying the start of that frame.\npager = 'ov -C -d \"│\" --section-delimiter \"^┌\" --section-header-num 3 --column-rainbow --column-mode' table_format = psql_unicode ",
    "description": "Use 'ov' as a pager for pgcli",
    "tags": [
      "ov",
      "pgcli",
      "PostgreSQL"
    ],
    "title": "pgcli",
    "uri": "/ov/pgcli/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "COUNT(*) First is COUNT(*). You can count the total number of cases.\nWhen using aggregate functions, the original row and column data is not output, and the aggregated result is output from there.\nThe following example does not look like a CSV because the result is one line, but it is output as a one-line, one-column CSV with a header.\nAlthough it simply counts the number of cases, care must be taken not to include the number in the interpretation of the header.\ntrdsql -icsv -ih -oh \"SELECT COUNT(*) FROM header.csv\" count(*) 3You can specify a search condition. This is used when you want to know the number of cases that match the search condition.\ntrdsql -icsv -ih -oh \"SELECT COUNT(*) FROM header.csv WHERE id\u003c'1'\" count(*) 2COUNT(column name) COUNT(column name) is also often used. In RDBMS, NULL is excluded, so it is used to distinguish it from COUNT(*).\nAlso, when COUNT and DISTINCT are combined, the number of cases excluding duplicates can be output.\nLet’s run it with the following CSV file.\nid,name 1,aaa 2,bbb 3,ccc 4,aaatrdsql -icsv -ih -oh \"SELECT COUNT(name) FROM abc.csv\" count(name) 4trdsql -ih -oh \"SELECT COUNT(DISTINCT name) FROM abc.csv\" COUNT(DISTINCT name) 3Aggregate functions can also be executed at once.\ntrdsql -ih -oh \"SELECT COUNT(name), COUNT(DISTINCT name) FROM abc.csv\" COUNT(name),COUNT(DISTINCT name) 4,3",
    "description": "Aggregation of trdsql",
    "tags": [
      "trdsql",
      "sql",
      "count"
    ],
    "title": "trdsql Aggregation",
    "uri": "/trdsql/05_aggregate/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can be set as a pager for mycli.\nmycli reads the client section of ~/.my.cnf in mysql. Please refer to https://www.mycli.net/config.\n[client] pager=\"ov -C --skip-lines 1 --header 1 -d'|'\"",
    "description": "Use 'ov' as a pager for mycli",
    "tags": [
      "ov",
      "mycli",
      "mysql"
    ],
    "title": "mycli",
    "uri": "/ov/mycli/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "Aggregation calculation Of course, you can aggregate calculations as well as COUNT() for aggregation. SQL has a set of aggregation functions that perform calculations on numbers.\nHere we explain with an example of a CSV file like the following.\nname,price apple,100 orange,50 melon,500 apple,90 apple,90 orange,40 orange,40SUM Calculate the sum. Add all the price columns.\ntrdsql -ih \"SELECT SUM(price) FROM sample.csv\" 910As I wrote before, trdsql treats columns as text types, so you need to CAST them to numeric types before calculating them. However, when using aggregation functions, implicit CAST may be omitted (depending on the database you use).\nIf you want to explicitly CAST, do the following.\ntrdsql -ih \"SELECT SUM(CAST(price AS int)) FROM sample.csv\" 910AVG Calculate the average. It can be calculated by sum / number of cases, but it is easier to understand if you use a function. In this example, the meaning of the average may not be so much.\ntrdsql -ih \"SELECT AVG(CAST(price AS int)) FROM sample.csv\" 130MIN,MAX Output the minimum and maximum values.\ntrdsql -ih -oh \"SELECT MIN(CAST(price AS INT)),MAX(CAST(price AS INT)) FROM sample.csv\" MIN(CAST(price AS INT)),MAX(CAST(price AS INT)) 40,500MIN and MAX can be used with text types, so you need to explicitly CAST them.\n(You may want to know the name of MIN and MAX, but SQL is a bit complicated, so I’ll do it later).\nAs I wrote last time, aggregation functions can be executed at once.\ntrdsql -ih -oat \"SELECT COUNT(name) as count, COUNT(DISTINCT name) as uniq, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv\" +-------+------+-----+-----+-----+-----+ | count | uniq | min | max | sum | avg | +-------+------+-----+-----+-----+-----+ | 7 | 3 | 40 | 500 | 910 | 130 | +-------+------+-----+-----+-----+-----+",
    "description": "trdsql aggregation calculation",
    "tags": [
      "trdsql",
      "sum",
      "min",
      "max",
      "avg"
    ],
    "title": "trdsql aggregation calculation",
    "uri": "/trdsql/06_calculation/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "The ps output is properly columned. --column-width can divide columns better than spaces.\nps aux | ov --column-width --column-rainbow -H1 ",
    "description": "Use 'ov' as a pager for ps",
    "tags": [
      "ov",
      "ps"
    ],
    "title": "ps",
    "uri": "/ov/ps/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can also be used as a man pager.\nMANPAGER=\"ov --section-delimiter '^[^\\s]' --section-header\"In the man page, you can set the color by the StyleOverStrike and StyleOverLine styles.\nStyleOverStrike: Foreground: \"aqua\" Bold: true StyleOverLine: Foreground: \"red\" Underline: true",
    "description": "Use 'ov' as a pager for man pages",
    "tags": [
      "ov",
      "man"
    ],
    "title": "man",
    "uri": "/ov/man/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "GROUP BY When aggregating, you may want to calculate the total of the entire table, but you may also want to output the total of each group.\nFor example, if you have a CSV file like the following.\nname,price apple,100 orange,50 melon,500 apple,90 apple,90 orange,40 orange,40If you want to calculate the total of each name, you can do the following.\ntrdsql -ih \"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='apple'\" apple,280trdsql -ih \"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='orange'\" orange,130However, if you want to calculate the total of each name at once, you can use GROUP BY.\ntrdsql -ih \"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv GROUP BY name\" apple,280 melon,500 orange,130Let’s change the previous aggregation a little and output it for each name.\ntrdsql -ih -oat \\ \"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv GROUP BY name\" +--------+-------+-----+-----+-----+--------------------+ | name | count | min | max | sum | avg | +--------+-------+-----+-----+-----+--------------------+ | apple | 3 | 90 | 100 | 280 | 93.33333333333333 | | melon | 1 | 500 | 500 | 500 | 500 | | orange | 3 | 40 | 50 | 130 | 43.333333333333336 | +--------+-------+-----+-----+-----+--------------------+trdsql -ih -oat \"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv GROUP BY name ORDER BY sum DESC\" +--------+-------+-----+-----+-----+--------------------+ | name | count | min | max | sum | avg | +--------+-------+-----+-----+-----+--------------------+ | melon | 1 | 500 | 500 | 500 | 500 | | apple | 3 | 90 | 100 | 280 | 93.33333333333333 | | orange | 3 | 40 | 50 | 130 | 43.333333333333336 | +--------+-------+-----+-----+-----+--------------------+HAVING You can also use HAVING to filter the results of GROUP BY.\ntrdsql -ih -oat \"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv GROUP BY name HAVING COUNT(name) \u003e 1 ORDER BY sum DESC\" +--------+-------+-----+-----+-----+--------------------+ | name | count | min | max | sum | avg | +--------+-------+-----+-----+-----+--------------------+ | apple | 3 | 90 | 100 | 280 | 93.33333333333333 | | orange | 3 | 40 | 50 | 130 | 43.333333333333336 | +--------+-------+-----+-----+-----+--------------------+",
    "description": "trdsql GROUP aggregation",
    "tags": [
      "trdsql",
      "group by"
    ],
    "title": "trdsql GROUP aggregation",
    "uri": "/trdsql/07_group/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "Log aggregation Apache and nginx Log are also becoming established in the way of outputting in LTSV format.\nAn example of analyzing such Log with trdsql.\nThe output side customizes the apache LogFormat setting to the following custom format.\nLogFormat \"host:%h\\tident:%l\\tuser:%u\\ttime:%t\\treq:%r\\tstatus:%\u003es\\tsize:%b\\treferer:\\%{Referer}i\\tua:%{User-Agent}i\" combined_ltsvThe items host, ident, user, time, req, status, size, referer, ua are output.\nThe actual Log looks like this.\nhost:176.99.192.42\tident:-\tuser:-\ttime:[21/Oct/2019:21:33:53 +0900]\treq:GET /category/software HTTP/1.1\tstatus:200\tsize:138\treferer:-\tua:Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0) host:192.54.157.102\tident:-\tuser:-\ttime:[21/Oct/2019:21:33:53 +0900]\treq:GET /item/electronics/4478 HTTP/1.1\tstatus:200\tsize:60\treferer:/category/sports\tua:Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0.1) Gecko/20100101 Firefox/9.0.1 host:88.60.137.115\tident:-\tuser:-\ttime:[21/Oct/2019:21:33:53 +0900]\treq:POST /search/?c=Games+Electronics HTTP/1.1\tstatus:200\tsize:98\treferer:/item/networking/929\tua:Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3 ...analysis First, try -a of trdsql.\nThe table name is log.ltsv. The file type is LTSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | \\`host\\` | text | | ident | text | | \\`user\\` | text | | \\`time\\` | text | | req | text | | \\`status\\` | text | | \\`size\\` | text | | referer | text | | ua | text | +-------------+------+ Data samples: +---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+ | \\`host\\` | ident | \\`user\\` | \\`time\\` | req | \\`status\\` | \\`size\\` | referer | ua | +---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+ | 176.99.192.42 | - | - | [21/Oct/2019:21:33:53 +0900] | GET /category/software | 200 | 138 | - | Mozilla/5.0 (compatible; MSIE | | | | | | HTTP/1.1 | | | | 9.0; Windows NT 6.1; WOW64; | | | | | | | | | | Trident/5.0) | +---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+ Examples: trdsql \"SELECT \\`host\\`, ident, \\`user\\`, \\`time\\`, req, \\`status\\`, \\`size\\`, referer, ua FROM log.ltsv\" trdsql \"SELECT \\`host\\`, ident, \\`user\\`, \\`time\\`, req, \\`status\\`, \\`size\\`, referer, ua FROM log.ltsv WHERE \\`host\\` = '176.99.192.42'\" trdsql \"SELECT \\`host\\`, count(\\`host\\`) FROM log.ltsv GROUP BY \\`host\\`\" trdsql \"SELECT \\`host\\`, ident, \\`user\\`, \\`time\\`, req, \\`status\\`, \\`size\\`, referer, ua FROM log.ltsv ORDER BY \\`host\\` LIMIT 10\"Execute the Examples as a hint and execute it using the SQL introduced so far.\nOutput the top 5 Output the top 5 hosts with the most requests.\ntrdsql -oat \"SELECT \\`host\\`, count(\\`host\\`) as count FROM log.ltsv GROUP BY \\`host\\` ORDER BY count DESC LIMIT 5\" +----------------+-------+ | host | count | +----------------+-------+ | 36.69.176.222 | 5 | | 92.132.226.51 | 4 | | 76.222.144.225 | 4 | | 28.63.137.225 | 4 | | 28.57.188.28 | 4 | +----------------+-------+Output the top 5 hosts with the most requests\ntrdsql -oat \"SELECT req, count(req) as count FROM log.ltsv GROUP BY req ORDER BY count DESC LIMIT 5\" +--------------------------------+-------+ | req | count | +--------------------------------+-------+ | GET /category/software | 74 | | HTTP/1.1 | | | GET /category/electronics | 73 | | HTTP/1.1 | | | GET /category/games HTTP/1.1 | 66 | | GET /category/books HTTP/1.1 | 44 | | GET /category/office HTTP/1.1 | 30 | +--------------------------------+-------+Output with search condition Output requests and counts other than status 200\ntrdsql -oat \"SELECT req, status,count(req) as count FROM log.ltsv WHERE status != '200' GROUP BY req, status ORDER BY count DESC\" +-------------------------------+--------+-------+ | req | status | count | +-------------------------------+--------+-------+ | GET /item/books/3230 HTTP/1.1 | 404 | 1 | | GET /item/games/4672 HTTP/1.1 | 404 | 1 | +-------------------------------+--------+-------+",
    "description": "trdsql Log aggregation",
    "tags": [
      "trdsql",
      "log",
      "ltsv"
    ],
    "title": "trdsql Log aggregation",
    "uri": "/trdsql/08_log/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "top works fine when started in batch mode (it doesn’t work as-is when started normally because it steals keystrokes).\nIt is convenient because you can browse the history of top.\ntop -b -c -w512|ov --column-delimiter \"/\\s+/\" --section-delimiter \"^top\" --column-mode --column-rainbow --follow-section -w=false ",
    "description": "Use 'ov' as a pager for top",
    "tags": [
      "ov",
      "top"
    ],
    "title": "top",
    "uri": "/ov/top/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "procs supports pager.\nYou can specify the pager in the configuration file.\nIt is convenient to set header(-H) to 1 or 2.\n[pager] command = \"ov -H=1 -w=false -d=│\"",
    "description": "Use 'ov' as a pager for procs",
    "tags": [
      "ov",
      "procs"
    ],
    "title": "procs",
    "uri": "/ov/procs/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "Wildcard Up to this point, we have targeted one file, but log files, etc. may be rotated and become multiple files.\nIf the target file is composed of the same columns, you can use wildcards to treat multiple files as one table.\nls test*.csv test1.csv test2.csv test3.csvtrdsql -icsv \"SELECT COUNT(*) FROM test*.csv\" 15Compressed files Old log files might be compressed. If they are compressed with [gzip, bzip2, zstd, lz4, xz], they will be automatically decompressed and processed.\ntrdsql -iltsv \"SELECT * FROM access.log.2.gz\" You can also combine wildcards with compressed files for execution.\nls test*.csv access.log access.log.1 access.log.2.gztrdsql -iltsv \"SELECT * FROM access.log.*\" ",
    "description": "trdsql wildcard, compressed file",
    "tags": [
      "trdsql",
      "wildcard",
      "圧縮",
      "gz",
      "bz2",
      "zstd",
      "lz4",
      "xz"
    ],
    "title": "trdsql wildcard, compressed file",
    "uri": "/trdsql/09_wildcard/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "bat supports pager.\nYou can use it by setting the environment variable PAGER or BAT_PAGER.\nexport BAT_PAGER=\"ov -F -H3\" bat should not be wrapped (--wrap=never). If it wraps with bat, it cannot be switched to unwrap. It is better to operate with ov.\nbat --wrap=never README.md ",
    "description": "ov can also be used as a pager for bat.",
    "tags": [
      "ov",
      "bat"
    ],
    "title": "bat",
    "uri": "/ov/bat/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov supports watch mode, which reads files at regular intervals. The file is added every specified time.\nov --watch 1 /proc/meminfo At that time, add formfeed (\\f) instead of EOF. watch mode automatically sets follow-section “\\f”.\n",
    "description": "File monitoring (watch) with ov",
    "tags": [
      "ov",
      "watch"
    ],
    "title": "Watch files with ov",
    "uri": "/ov/watch/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can also be used as a csv viewer.\nov -H1 -C -d',' -c --column-rainbow MOCK_DATA.csv ",
    "description": "ov can also be used as a csv viewer.",
    "tags": [
      "ov"
    ],
    "title": "view csv",
    "uri": "/ov/csv/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "標準入力 trdsqlは他のUNIXツールのように標準入力からデータを受け取ることができます。ただSQLの文法上テーブル名を指定する必要があります。標準入力を使用するときは、「-」か「stdin」を使用します。\ncat test.csv|trdsql -icsv \"SELECT * FROM -\" apple,100 orange,50 potato,30 trdsqlは標準入力から受け取りますが、標準入力をすべて受け取り終わってからSQLの実行が開始されます。 そのため終わらないコマンドからの出力を受け取ることはできません。\nCSV、LTSV、JSONを出力するコマンドでは、ファイル名の代わりに標準入力を使えばそのまま利用できます。 例えば、文字コードがUTF-8でないファイルをUTF-8に変更してそのまま使用したり、\nnkf -w sjis.csv|trdsql -icsv \"SELECT * FROM -\" 大きなファイルを処理する前に先頭の数行のみを処理して試してみたりできます。\nhead -100 big.csv|trdsql -icsv \"SELECT * FROM -\" それ以外にも、例えばUNIX系のコマンドでは、スペースを区切りとして解釈すればテーブルデータとして扱える出力をするコマンドが数多くあります。\n例えば psコマンドでは、\nps PID TTY TIME CMD 1157 pts/3 00:00:00 ps 22590 pts/3 00:00:03 zshのようにヘッダーがあり、それぞれの列を出力しています（trdsqlでは連続したスペースの区切り文字は一つとして解釈するように動作します）。\nそのため、以下のように実行すると Ascii Table形式で出力できます。\nps|trdsql -ih -id \" \" -oat \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM -\" +-------+-------+----------+--------+ | PID | TTY | TIME | CMD | +-------+-------+----------+--------+ | 1363 | pts/3 | 00:00:00 | ps | | 1364 | pts/3 | 00:00:00 | trdsql | | 22590 | pts/3 | 00:00:03 | zsh | +-------+-------+----------+--------+標準入力の解析 また、trdsqlの-a解析オプションは標準入力も使用することが出来ます。\nコマンド | trdsql -ih -id \" \" -a - ps|trdsql -id \" \" -ih -a - The table name is -. The file type is CSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | \\`PID\\` | text | | \\`TTY\\` | text | | \\`TIME\\` | text | | \\`CMD\\` | text | +-------------+------+ Data samples: +---------+---------+----------+---------+ | \\`PID\\` | \\`TTY\\` | \\`TIME\\` | \\`CMD\\` | +---------+---------+----------+---------+ | 3168 | pts/0 | 00:00:00 | ps | +---------+---------+----------+---------+ Examples: trdsql -id \" \" -ih \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM -\" trdsql -id \" \" -ih \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM - WHERE \\`PID\\` = '3168'\" trdsql -id \" \" -ih \"SELECT \\`PID\\`, count(\\`PID\\`) FROM - GROUP BY \\`PID\\`\" trdsql -id \" \" -ih \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM - ORDER BY \\`PID\\` LIMIT 10\"",
    "description": "trdsqlは他のUNIXツールのように標準入力からデータを受け取ることができます。ただSQLの文法上テーブル名を指定する必要があります。標準入力を使用するときは、「-」か「stdin」を使用します。",
    "tags": [
      "trdsql",
      "stdin"
    ],
    "title": "trdsql 標準入力",
    "uri": "/trdsql/10_stdin/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can also be used as a markdown viewer. Specifying the markdown header as a section delimiter makes it easier to move to the next section.\nov --section-delimiter \"^#\" README.md ",
    "description": "ov can also be used as a markdown viewer.",
    "tags": [
      "ov",
      "markdown"
    ],
    "title": "View markdown",
    "uri": "/ov/markdown/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "ここでtrdsqlの内部処理の概要を簡単に説明します。\ntrdsqlの内部処理は、以下のようになっています。\nオプションやSQLコマンドの解釈 SQLコマンド内のファイル名をデータベースにインポート SQLの実行 指定された出力フォーマットで実行結果を出力 SQLの実行は実際のRDBMSを使用して実行されます（デフォルトではSQLite3のメモリデータベース)。\ntrdsqlはインポートとエクスポートの形式を整えているだけで、データベースに丸投げしているツールと言えます。\nそのため、他の1行づつ処理するようなストリーミングができるツールとは違い、一旦全部のデータをインポートしてから実行されるため、非常に大きなデータではSQLの実行開始までに時間がかかります。\nしかしながら、SQLライクではなく本当のSQLが使用できます。\nこれらの特徴を踏まえて使用すると良いでしょう。\n",
    "description": "trdsqlの内部処理の概要を簡単に説明します。",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql 処理の概要",
    "uri": "/trdsql/11_summary/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can specify multiple files.\n] key to view the next document [ key to view previous document (With default key bindings).\nov *.go ",
    "description": "Display multiple files",
    "tags": [
      "ov"
    ],
    "title": "multiple files",
    "uri": "/ov/multifile/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "trdsqlは組込みのSQLite3を利用してSQLを実行していますが、データベースの処理を別のデータベースに変更出来ます。\nここではPostgreSQLを使用する方法を説明します。\nPostgreSQLに接続 SQLite3と違いPostgreSQLは動作しているPostgreSQLサーバーが必要です。接続できテーブルが作成できる権限があるデータベースを作成しておきます。\nオプションの -driver に postgres を指定し、-dsn にサーバーへの接続情報を指定します。\ndsnの項目には以下が指定できます。デフォルトの場合は省略可能です。\n項目名 説明 dbname データベース名（デフォルト:ログインユーザー名） user ユーザー名（デフォルト:ログインユーザー名） password パスワード（デフォルト:なし） host ホスト名又はIPアドレス（デフォルト:localhost） port ポート番号(デフォルト: 5432) sslmode SSLモード（デフォルト: require） fallback_application_name （提供されない場合の）アプリケーション名（デフォルト:なし） connect_timeout 接続の最大待機時間 sslcert 証明書ファイルの場所 sslkey 秘密鍵ファイルの場所 sslrootcert ルート証明書ファイルの場所 項目=値をスペース区切りで指定します。\nDSN指定 例えば、ローカルホストのportが5433でデータベース名がtrdsql_testに接続するには以下のようにします。\ntrdsql -driver postgres -dsn \"host=localhost port=5433 dbname=trdsql_test\" \"SELECT 1\" UNIXドメインソケット UNIXドメインソケットへ接続もできます。\nパッケージ等でPostgreSQLをインストールすると以下のような場所にUNIXドメインソケットファイルが作成されています。\n/var/run/postgresql/.s.PGSQL.5432上記の場合、hostに/var/run/postgresql/を指定します。「/」から始まるとUnixドメインソケットとみなされます。portは.s.PGSQL.の後にある「5432」を指定します。\ntrdsql -driver postgres -dsn \"host=/var/run/postgresql/ port=5432 dbname=trdsql_test\" \"SELECT VERSION()\" \"PostgreSQL 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 7.4.0-1ubuntu1~18.04.1) 7.4.0, 64-bit\"ソースからインストールした場合のデフォルトは、/tmp/にUnixドメインソケットが作成されています。\n/tmp/.s.PGSQL.5120というファイルがあれば、以下のようにして接続します。\ntrdsql -driver postgres -dsn \"host=/tmp/ port=5120 dbname=postgres\" \"SELECT VERSION()\" \"PostgreSQL 12.0 on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 7.4.0-1ubuntu1~18.04.1) 7.4.0, 64-bit\"他のドライバとの違い 接続できれば、これまでと同じようにSQLが実行できますが、実際に実行されるのはPostgreSQL上なので、PostgreSQLが実行できるSQLを書く必要があります。\nまず注意が必要なのが、列名のエスケープに使用していた「`」文字が「\"」になります。\nPostgreSQLドライバを指定して、-aオプションによる解析をおこなうとSQLの例も変更されています。\ntrdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih -a sample.csv The table name is sample.csv. The file type is CSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | \\\"name\\\" | text | | price | text | +-------------+------+ Data samples: +----------+-------+ | \\\"name\\\" | price | +----------+-------+ | apple | 100 | +----------+-------+ Examples: trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", price FROM sample.csv\" trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", price FROM sample.csv WHERE \\\"name\\\" = 'apple'\" trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", count(\\\"name\\\") FROM sample.csv GROUP BY \\\"name\\\"\" trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", price FROM sample.csv ORDER BY \\\"name\\\" LIMIT 10\"また、PostgreSQLでは暗黙のCASTの範囲が狭いので、明示的にCASTをする必要があります。 （その代わり、PostgreSQLでは ::型名というCASTの文法が使えます）。\n日頃PostgreSQLを使っている方は、慣れた文法で書くことができますが、PostgreSQLに接続して使用するメリットはこれだけではありません。\n実テーブルの出力 trdsqlは対象のファイルが無くてもSQLの実行するようになっているため、実際のテーブルに対してSQLの実行が出来ます。そして、出力フォーマットの指定はそのまま有効なため、豊富なフォーマットに出力できるデータベースクライアントとして使用できます。\n例えば実際のテーブルをMarkDownで出力することも簡単にできます。\ntrdsql -driver postgres -dsn \"host=localhost dbname=noborus\" -omd -ih \"SELECT * FROM city LIMIT 10\" | city_id | city | country_id | last_update | |---------|--------------------|------------|----------------------| | 1 | A Corua (La Corua) | 87 | 2006-02-15T09:45:25Z | | 2 | Abha | 82 | 2006-02-15T09:45:25Z | | 3 | Abu Dhabi | 101 | 2006-02-15T09:45:25Z | | 4 | Acua | 60 | 2006-02-15T09:45:25Z | | 5 | Adana | 97 | 2006-02-15T09:45:25Z | | 6 | Addis Abeba | 31 | 2006-02-15T09:45:25Z | | 7 | Aden | 107 | 2006-02-15T09:45:25Z | | 8 | Adoni | 44 | 2006-02-15T09:45:25Z | | 9 | Ahmadnagar | 44 | 2006-02-15T09:45:25Z | | 10 | Akishima | 50 | 2006-02-15T09:45:25Z |動作的には、同名のファイルがあれば、そのファイルをインポートして（元のテーブルは削除されたりはしません）実行し、無ければそのまま実行することで元のテーブルに対してSQLが実行されます。\n",
    "description": "trdsqlでPostgreSQLを使用する方法を説明します。",
    "tags": [
      "trdsql",
      "postgresql"
    ],
    "title": "trdsql PostgreSQLエンジンの使用",
    "uri": "/trdsql/12_postgres/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can highlight multiple words in multiple colors.\nov --multi-color \"ERROR.*,WARN,INFO,DEBUG,not,^.{24}\" access.log input mode Enter regular expressions separated by spaces. Enclose in quotation marks if it contains spaces.\n.(default key bindings) multicolor input mode. ERROR.* WARN \"error is\"customize The colors(styles) displayed are customizable. See github customize for settings.\nStyleMultiColorHighlight: - Foreground: \"red\" - Foreground: \"aqua\" - Foreground: \"yellow\" - Foreground: \"fuchsia\" - Foreground: \"lime\" - Foreground: \"blue\" - Foreground: \"grey\"",
    "description": "ov can highlight multiple words in multiple colors.",
    "tags": [
      "ov"
    ],
    "title": "Multicolor highlights multiple words",
    "uri": "/ov/multicolor/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "前回はPostgreSQL接続の話でしたが、今度はMySQLに接続して使用する方法を説明します。\nMySQLに接続 MySQLに接続するには動作しているMySQLサーバーが必要です。接続できテーブルが作成できる権限があるデータベースを作成しておきます。\nオプションの -driver に mysql を指定し、-dsn にサーバーへの接続情報を指定します。\nMySQLのdsnは以下のような形式です。\nユーザー名:パスワード@プロトコル(ホスト名:ポート番号)/データベース名?param=valueparam=valueのパラメーターは多くの種類がありますので、go-sql-driverを参照して下さい。\nUNIXドメインソケット ローカルホストのデフォルトのUNIXドメインソケットを使用する場合は、ユーザー名、パスワード、データベース名を指定すれば接続できます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" \"SELECT 1\" UNIXドメインソケットのパスを指定するには、プロトコルにunixを指定して、unix(パス)で指定します。\ntrdsql -driver mysql -dsn \"noborus:noborus@unix(/var/run/mysqld/mysqld.sock)/trdsql_test\" \"SELECT 1\" TCP接続 TCPはプロトコルにtcpを指定して、tcp(ホスト名:ポート番号)を指定します。\ntrdsql -driver mysql -dsn \"noborus:noborus@tcp(localhost:3306)/trdsql_test\" \"SELECT 1\" 実テーブルの出力 接続できれば、これまでと同じようにSQLが実行できますが、実際に実行されるのはMySQL上なので、MySQLが実行できるSQLを書く必要があります。\n前回のPostgreSQLと同様にMySQLのテーブルに対してSQLを実行し、オプションで指定したフォーマットで出力することが出来ます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -oat -ih \"SELECT * FROM actor LIMIT 10\" +----------+------------+--------------+---------------------+ | actor_id | first_name | last_name | last_update | +----------+------------+--------------+---------------------+ | 1 | PENELOPE | GUINESS | 2006-02-15 04:34:33 | | 2 | NICK | WAHLBERG | 2006-02-15 04:34:33 | | 3 | ED | CHASE | 2006-02-15 04:34:33 | | 4 | JENNIFER | DAVIS | 2006-02-15 04:34:33 | | 5 | JOHNNY | LOLLOBRIGIDA | 2006-02-15 04:34:33 | | 6 | BETTE | NICHOLSON | 2006-02-15 04:34:33 | | 7 | GRACE | MOSTEL | 2006-02-15 04:34:33 | | 8 | MATTHEW | JOHANSSON | 2006-02-15 04:34:33 | | 9 | JOE | SWANK | 2006-02-15 04:34:33 | | 10 | CHRISTIAN | GABLE | 2006-02-15 04:34:33 | +----------+------------+--------------+---------------------+",
    "description": "trdsqlでMySQLを使用する方法を説明します。",
    "tags": [
      "trdsql",
      "mysql"
    ],
    "title": "trdsql MySQLエンジンの使用",
    "uri": "/trdsql/13_mysql/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "Many pagers start displaying before reading the entire file, so it is difficult to make a simple speed comparison, but if you need to move to the end or need the number of lines (display line numbers, etc.), you need to read the entire file, which can make a difference in speed.\nWhen reading a large file, ov records the number of lines and positions so that it can be read again later, so it uses less memory and runs faster.\nTherefore, even if you open a large file, you will not be delayed by the operation. Let’s compare it with less.\nov does not read to memory for large files, so it only counts and records, so the count of the total number of lines ends quickly. Once you know the number of lines, you can move to the end immediately, so there is no interruption in operation.\nAlso, even if you move to the end like less before reading all the lines, you can move to the end immediately because you move to the end first and then resume counting.\n",
    "description": "speed of opening large files",
    "tags": [
      "ov"
    ],
    "title": "speed of opening large files",
    "uri": "/ov/speed/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "SQLite3への接続方法を説明します。\nSQLite3に接続 そもそもtrdsqlのデフォルトはSQLite3のメモリデータベースに接続していますが、メモリデータベース以外にも接続できます。\nオプションの -driver に sqlite3 を指定し、-dsn にサーバーへの接続情報を指定します。\ndsnはsqlite3のデータファイル名を指定すれば、そのファイルをデータベースとして使用します。 （ファイル名の指定の仕方はfile: や file:// 等も可能です）。\nあらかじめファイルが無い場合もエラーにはなりません。\ntrdsql -driver sqlite3 -dsn \"test.sqlite\" -oat \"SELECT * FROM test\" +----+--------+-------+ | id | name | price | +----+--------+-------+ | 1 | Orange | 50 | | 2 | Melon | 500 | | 3 | Apple | 100 | +----+--------+-------+さらに「?」で続けて、オプションを渡すこともできます。 メモリデータベースでオプションを渡すときには 「:memory:?」の後にオプションを続けて下さい。\n例えば、LIKEで大文字小文字を区別するように変更するには以下のようにします。\nデフォルトではLIKEは大文字小文字が区別されない。\ntrdsql -driver sqlite3 -dsn \":memory:\" -ih \"SELECT * FROM header.csv WHERE name LIKE '%a%'\" 1,Orange 3,Apple_cslike=trueにすると大文字小文字が区別されます。\ntrdsql -driver sqlite3 -dsn \":memory:?_cslike=true\" -ih \"SELECT * FROM header.csv WHERE name LIKE '%a%'\" 1,Orangeデータベースファイルに対してmodeを指定する場合は、file:ファイル名?mode=で指定します。\nmode=rwcでは書き込みが成功します。\ntrdsql -ih -driver sqlite3 -dsn \"file:trdsql_test.db?mode=rwc\" \"CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv \" mode=roでは書き込みが禁止されエラーになります。\ntrdsql -ih -driver sqlite3 -dsn \"file:trdsql_testro.db?mode=ro\" \"CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv \" 2020/01/08 14:02:54 ERROR(BEGIN):unable to open database file: no such file or directoryDSNのオプションの詳細は go-sqlite3のページを参照して下さい。\n",
    "description": "trdsql SQLite3エンジンの使用方法を説明します。",
    "tags": [
      "trdsql",
      "sqlite3"
    ],
    "title": "trdsql SQLite3エンジンの使用",
    "uri": "/trdsql/14_sqlite3/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "trdsqlにはデータベースにインポートするオプションはありません。 しかしながら、SELECT以外のSQLの実行も可能なので、SQLによるインポートが可能です。\n以下は、メモリデータベースにインポートしても終了すると消えてしまうので、メモリデータベース以外のデータベースに接続して実行します。\nCREATE TABLE AS テーブルを作成してインポートするには CREATE TABLE ASを使用します。\nPostgreSQL で CREATE TABLE AS まず、PostgreSQLへデータをインポートしてみます。 これまで、SELECTで実行してきた内容に CREATE TABLE テーブル名 AS を前につければ、テーブルが作成されデータがインポートされます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"CREATE TABLE test AS SELECT * FROM header.csv\"成功した場合、何も表示されずに終了します。失敗した場合、エラーが表示されます。\nSELECTの結果がインポートされるため、SELECT側で列名の変更、列の型指定、インポートするデータの条件指定をすれば良いことになります。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"CREATE TABLE fruits AS SELECT id::int AS num, name::VARCHAR(20) FROM header.csv\"trdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh\\ \"SELECT * FROM fruits\" num,name 1,Orange 2,Melon 3,Appleもし、テーブルの作成のみを先にして、INSERTを後でおこないたい場合はWITH NO DATAを付けます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"CREATE TABLE test AS SELECT id::int, name FROM header.csv WITH NO DATA\"MySQL で CREATE TABLE AS PostgreSQLと同様にCREATE TABLE テーブル名 ASを前に付ければ、データがインポートされます。\nSELECTの結果のCASTには制限があるので、SELECT時のCASTでは不十分な場合があります。 CREATE TABLE テーブル名 (列名 型名)という構文が使えるので、SELECTの結果に合わせて型名を指定するのが良いでしょう。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv\"MySQLで、デーブルの作成のみをおこない場合は、LIMIT 0や WHERE 1=2でSELECTの件数を0にします。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv WHERE 1=2\"SQLite3 で CREATE TABLE AS SQLite3でも同様にCREATE TABLE テーブル名 ASを前に付ければ、データがインポートされます。\nSQLite3では、実際のデータ型は基本的な型（INTEGER、REAL、TEXT、BLOB）になるので、CASTはこれらの型にする場合のみ必要です。\nそれ以外は、後で制約として追加するのが良いでしょう。\ntrdsql -driver sqlite3 -dsn \"trdsql_test\" -ih \\ \"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num, name FROM header.csv\"SQLite3で、デーブルの作成のみをおこない場合は、LIMIT 0や WHERE 1=2でSELECTの件数を0にします。\ntrdsql -driver sqlite3 -dsn \"trdsql_test\" -ih \\ \"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num,name FROM header.csv WHERE 1=2\"SQLite3では後から主キーを付けることができません。\nINSERT 既にテーブルがあって、ファイルの内容をインポートしたい場合は、SELECTの前に INSERT INTO テーブル名を付けて、実行します。 これは、ほぼデータベース共通です。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv\"上記でCREATA TABLE ASした場合等で、主キーを付けていないと繰り返し実行してしまうとそのまま重複してINSERTされます。\nPostgreSQLでは、INSERTにON CONFLICTが使用できるので、主キーを付けてから、\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"ALTER TABLE fruits ADD CONSTRAINT table_key PRIMARY KEY(id);\"INSERT ON CONFLICTの構文を使用すると差分のみINSERTができます。\n既に同じidが在る行については何もしない。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv ON CONFLICT DO NOTHING\"既に同じidが在る行についてはUPDATEする。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv \"\\ \"ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name\"MySQLでは、INSERT IGNOREで重複エラーを回避できます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"INSERT IGNORE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv\"既に同じidが在る行をUPDATEするにはON DUPLICATE KEY UPDATEを使用して以下のようにします。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h \"\\ \"ON DUPLICATE KEY UPDATE name = h.name\"又は、REPLACE INTO文が使用できます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"REPLACE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h \"SQLite3は、主キーがあるテーブルが作成済みであれば、同様にREPLACE INTO文が使用できます。\ntrdsql -driver sqlite3 -dsn \"trdsql_test.db\" -ih \\ \"REPLACE INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv AS h \"",
    "description": "trdsqlでデータベースにインポートする方法を説明します。",
    "tags": [
      "trdsql",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "SQLite3"
    ],
    "title": "trdsql DBインポート",
    "uri": "/trdsql/15_import/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "これまで一つのファイルにSQLを実行してきましたが、複数のファイルをJOINするSQLも実行できます。\n以下の2つのCSVファイルがあったとして、\nabc.csv\n1,AAA 2,BBB 3,CCCprice.csv\n1,100 2,500 3,50以下のように連結するのが、JOINです。\n1,AAA,100 2,BBB,500 3,CCC,50trdsqlではテーブルの代わりにファイル名を使用すれば、そのままSQLのJOINが書けます。\ntrdsql \"SELECT a.c1, a.c2, p.c2\" \\ \"FROM abc.csv AS a\" \\ \"LEFT JOIN price.csv AS p\" \\ \"USING (c1)\"同じ件数で対応する同じ列がある1対1のJOINのため、INNER JOINと同じ結果になります。 LEFT JOINの場合は、先に指定したabc.csvの行はすべて表示され、price.csvは対応する行がある場合のみ表示されます。 今回はヘッダーがないCSVなので、列名はc1,c2…の共通になるため、一番左側(c1)が共通の列としてUSINGを使用してます。これは ON a.c1 = p.c1 と同じ意味になります。\n複数のCSVをJOINするときには、ヘッダーの有無を統一しておく必要があります。\nしかしながら、自動判別可能な拡張子になっていれば、CSVとLTSV等の混在は可能です。\nunit.ltsv\nid:1\tunit:個 id:2\tunit:箱先程のCSVのJOINの結果に更にLTSVをJOINします。\ntrdsql -oat \\ \"SELECT a.c1, a.c2, p.c2, unit\" \\ \" FROM abc.csv AS a\" \\ \"LEFT JOIN price.csv AS p\" \\ \"USING (c1)\" \\ \"LEFT JOIN unit.ltsv AS u \" \\ \"ON (a.c1 = u.id)\" +----+-----+-----+------+ | c1 | c2 | c2 | unit | +----+-----+-----+------+ | 1 | AAA | 100 | 個 | | 2 | BBB | 500 | 箱 | | 3 | CCC | 50 | | +----+-----+-----+------+",
    "description": "trdsqlで複数のファイルをJOINする方法を説明します。",
    "tags": [
      "trdsql",
      "SQL",
      "JOIN"
    ],
    "title": "trdsql JOIN",
    "uri": "/trdsql/16_join/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "既にテーブルが存在するデータベースに接続することにより、ファイルとテーブルをJOINすることもできます。\n例えば、データベース内にfruitsというテーブルがあった場合に、前回のabc.csvとJOINできます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SELECT a.c1, a.c2, f.name FROM abc.csv AS a \"\\ \"LEFT JOIN fruits AS f ON (CAST(a.c1 AS int) = f.id)\" 1,AAA,Orange 2,BBB,Melon 3,CCC,Apple例えば、データベース上にusersテーブルがあり、抽出したいリストがCSVファイルであった場合に、リストをWHERE user IN (...)で並べる等を検討するところですが、trdsqlではダイレクトにJOINして抽出できます。\nlist.csv\ntarou jirou noborususersテーブル\nid,name 1,taizou 2,momo 3,taroutrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SELECT u.id, u.name FROM users AS u \"\\ \"INNER JOIN list.csv AS l ON (u.name = l.c1)\" 3,tarou逆にCSVファイルにデータベースのテーブルから情報を足すといったことも考えられます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SELECT u.id, u.name FROM list.csv AS l \"\\ \"LEFT JOIN users AS u ON (l.c1 = u.name)\" \\ \"ORDER BY u.id\" 3,tarou 52,jirou 98,noborus",
    "description": "既にテーブルが存在するデータベースに接続することにより、ファイルとテーブルをJOINすることもできます。",
    "tags": [
      "trdsql",
      "SQL",
      "JOIN"
    ],
    "title": "trdsql ファイルとテーブルのJOIN",
    "uri": "/trdsql/17_file_table/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "これまで列の並べ替えはしてきましたが、列の内容はそのままでした。 SQLでは、文字列の書き換えが得意分野とは言えませんが、SQLの関数を使うことにより、それなりできる機能は揃っています。\n列の連結 「||」を使って、列名をつなげば、２つ以上の列を連結して一つの列になります。\ntrdsql -ih -oh \\ \"SELECT id,name||id AS name_id FROM header.csv\" id,name_id 1,Orange1 2,Melon2 3,Apple3列と列だけでなく、文字列をそのまま連結も可能です。SQLの文字列は「’」シングルクオートで括ります。\ntrdsql -ih -oh \\ \"SELECT id,name||'_'||id AS name_id FROM header.csv\" id,name_id 1,Orange_1 2,Melon_2 3,Apple_3PostgreSQL、MySQL またPostgreSQLとMySQLでは、複数の列をつなげたいときには concat(列名or文字列,列名or文字列,…) が使用できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT concat(id,name,'個') FROM header.csv\" concat 1Orange個 2Melon個 3Apple個接続文字を付けてつなげたい場合は、concat_ws(接続文字,列名or文字列,列名or文字列,…)が使用できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT concat_ws(' ',id,name,'個') FROM header.csv\" concat_ws 1 Orange 個 2 Melon 個 3 Apple 個SQLite3 SQLite3では、concat,concat_wsはありませんが、printfが使用できますので、より柔軟に文字列を生成できます。\ntrdsql -ih -oh \"SELECT printf('%s %s %s',id,name,'個') FROM header.csv\" \"printf(\"\"%s %s %s\"\",id,name,'個')\" 1 Orange 個 2 Melon 個 3 Apple 個部分文字列 列の文字列を一部分だけ使用します。substr(列名or文字列、開始位置、文字の長さ)関数を使用します。\ntrdsql -ih -oh \\ \"SELECT id,substr(name,1,2) AS short FROM header.csv\" id,short 1,Or 2,Me 3,Ap文字置き換え 例えば、name列に含まれる’e’を’x’に置き換えます。\ntrdsql -ih -oh \\ \"SELECT id,replace(name,'e','x') AS name FROM header.csv\" id,name 1,Orangx 2,Mxlon 3,Applx置き換え前と置き換え後の文字数は同じでなくても構いません。\n大文字、小文字変換用の関数もあります。\nすべて小文字へ\ntrdsql -ih -oh \\ \"SELECT id,lower(name) FROM header.csv\" id,lower(name) 1,orange 2,melon 3,appleすべて大文字へ\ntrdsql -ih -oh \\ \"SELECT id,upper(name) FROM header.csv\" id,upper(name) 1,ORANGE 2,MELON 3,APPLEこのぐらいの書き換えで済む場合は良いですが、スクリプト言語ならば正規表現を使って書き換えられるのが普通なので、見劣りします。 PostgreSQLやMySQLエンジンを使うともう少し便利関数があります。\nregexp_replace PostgreSQL の regexp_replace(列名or文字列,正規表現パターン,置き換え文字列)を使用して、2文字目から4文字目までをxに置き換えます。\n()で囲ったパターンは、\\1,\\2…の参照文字として使用できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT id,regexp_replace(name, '(.)...','\\1xxx') FROM header.csv\" id,regexp_replace 1,Oxxxge 2,Mxxxn 3,AxxxeMySQLでは、8.0からregexp_replace()が使用できるようです。ただし参照文字が $1,$2…となります。そしてコマンドの引数で$1を使用するとシェルに解釈されてしまうので、\\でエスケープが必要になります。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih -oh \\ \"SELECT id,regexp_replace(name, '(.)...','\\$1xxx') FROM header.csv\" id,\"regexp_replace(name, '(.)...','$1xxx')\" 1,Oxxxge 2,Mxxxn 3,Axxxe",
    "description": "trdsqlで列の編集を行います。",
    "tags": [
      "trdsql",
      "sql"
    ],
    "title": "trdsql 列の編集",
    "uri": "/trdsql/18_edit_columns/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "これまでグループ集計による集計を紹介していますが、グループ集計は元の行とはまったく別にグループ毎の行を出力していました。 つまり、元のファイルとは別に集計の結果を出力していた訳です。\nそうではなくて、元のファイルの情報にプラスして集計結果を出して欲しい場合があります。 例えば、点数の列では、点数の平均との差を出力したり、柔軟な計算が出来るようになります。これまでの方法では、一旦集計してからJOINするしかありませんでしたが、SQLのWindow関数を使うとそういった集計も出すことが出来ます。\n古いバージョンではSQLite3では、Window関数を使用できませんでしたが、現在のtrdsqlに含まれているSQLite3では、Window関数を使用できます。\nPostgreSQLやMySQLでもWindow関数が使用できますが、MySQLは8.0からなので、注意が必要です。\n合計の表示 合計の計算は集計計算で出しましたが、最後の結果のみを出力していました。 Window関数では、行毎に結果を表示できます。\n例えば、以下のような点数のCSVについて結果を表示してみます。\nid,class,name,score 1,A,bob,174 2,A,alice,248 3,A,carol,163 4,B,dave,289 5,B,eve,157 6,B,flank,272Window関数は集約関数の関数にOVER ()句を付けることにより範囲や、順序を指定することにより計算をおこないます。 OVER ()句があることで、他の列とは独立して対象の行以外を計算できます。\nOVER()句を空で指定すると全行が対象となります。\ntrdsql -ih -omd \\ \"SELECT id,name,score, SUM(CAST(score AS int)) OVER () FROM score.csv\" | id | name | score | sum | |----|-------|-------|------| | 1 | bob | 174 | 1303 | | 2 | alice | 248 | 1303 | | 3 | carol | 163 | 1303 | | 4 | dave | 289 | 1303 | | 5 | eve | 157 | 1303 | | 6 | flank | 272 | 1303 |SUM()で合計が求められるので、AVG()で平均も求められます。\n平均との差 Window関数を使用した平均と対象の行との計算が可能です。 差を表示させると以下のようになります。\ntrdsql -ih -omd \\ \"SELECT id,name,score,\" \\ \"score - round(AVG(score) OVER()) AS 平均との差\"\\ \" FROM score.csv\" | id | name | score | 平均との差 | |----|-------|-------|------------| | 1 | bob | 174 | -43 | | 2 | alice | 248 | 31 | | 3 | carol | 163 | -54 | | 4 | dave | 289 | 72 | | 5 | eve | 157 | -60 | | 6 | flank | 272 | 55 |round()は小数点以下を丸める関数です。\nこれまでのSQLでは、1行づつの処理か、グループ化しての処理どちらかだけだったのが、Window関数では行の範囲を決めて、その処理を各行ごとに求められます。\n行の範囲の指定は「PARTITION BY」の後に「GROUP BY」で指定するような列が指定できます。\n全体ではなく、class毎に変更して出力してみます。\ntrdsql -ih -omd \\ \"SELECT id,class,name,score,\" \\ \"score - ROUND(avg(score) OVER(PARTITION BY class)) \"\\ \"AS 平均との差\" \\ \"FROM score.csv\" | id | class | name | score | 平均との差 | |----|-------|-------|-------|------------| | 1 | A | bob | 174 | -21 | | 2 | A | alice | 248 | 53 | | 3 | A | carol | 163 | -32 | | 4 | B | dave | 289 | 50 | | 5 | B | eve | 157 | -82 | | 6 | B | flank | 272 | 33 |class Aでは平均195との差を表示していて、class Bでは平均239との差を表示しています。\nここに先程の全体の平均との差を表示するのも並べるだけでできます。\ntrdsql -ih -omd \\ \"SELECT id,class,name,score,\" \\ \"score - ROUND(avg(score) OVER(PARTITION BY class)) \"\\ \"AS class平均との差, \" \\ \"score - round(AVG(score) OVER()) AS 全体平均との差\"\\ \"FROM score.csv\"行番号の付与 Window関数を使うと行番号を付けることもできます。\nfruits.ltsv\nname:grape\tnum:10 name:apple\tnum:3 name:banana\tnum:5 name:orange\tnum:2上記のLTSVファイルに、ROW_NUMBER() は集約関数にはないWindow関数特有の関数です。OVER()により範囲全体、順番の指定なしで使用すると以下のようになります。\ntrdsql \"SELECT ROW_NUMBER() OVER(), name,num \" \\ \"FROM fruits.ltsv\" 1,grape,10 2,apple,3 3,banana,5 4,orange,2順番を指定するには「ORDER BY」を指定します。\ntrdsql \"SELECT ROW_NUMBER() OVER(ORDER BY CAST(num AS int)),\" \\ \" name,num FROM fruits.ltsv\" 1,orange,2 2,apple,3 3,banana,5 4,grape,10Window関数には、まだまだ多くの種類の関数があります。各データベースのマニュアルを参照して下さい。\n",
    "description": "trdsqlでWindow関数を使用する方法を紹介します。",
    "tags": [
      "trdsql",
      "sql",
      "window関数"
    ],
    "title": "trdsql Window関数",
    "uri": "/trdsql/19_window/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "ファイル内に入っている日付、時刻をそのまま扱う場合は良いですが、変換等の処理をしたい場合があります。\nその場合は、一旦日付や時刻と解釈させてから扱う方が扱いやすくなります。\nSQLite3の日付、時刻処理 デフォルトのSQLite3の日付、時刻処理では、以下のフォーマットであれば、日付、時刻として解釈することができます。 もしSQLite3のエンジンで処理したい場合は、このフォーマットにしておくと良いでしょう。\nYYYY-MM-DD YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM:SS YYYY-MM-DD HH:MM:SS.SSS YYYY-MM-DDTHH:MM YYYY-MM-DDTHH:MM:SS YYYY-MM-DDTHH:MM:SS.SSS HH:MM HH:MM:SS HH:MM:SS.SSS now DDDDDDDDDD 以下のようなログファイルのtimeを処理したい場合、\ntime:2015-09-06T05:58:05+09:00\tmethod:POST\t... time:2015-09-06T05:58:41+09:00\tmethod:POST\t... time:2015-09-06T06:00:42+09:00\tmethod:GET\t...datetime(time)で日時として、認識させれば、strftime()で再フォーマットがしやすくなります。\ntrdsql -iltsv \"SELECT strftime('%Y年%m月%d日%H時%M分%S秒',datetime(time)) FROM log.ltsv\" 2015年09月05日20時58分05秒 2015年09月05日20時58分41秒 2015年09月05日21時00分42秒上記以外のフォーマットの場合は、SQLite3では文字列をまず書き換える必要があります。\nPostgreSQLの日付、時刻処理 PostgreSQLの日付、時刻処理は、より豊富なフォーマットを処理できます。\n多くの場合は、dateやtimestampにCASTするだけで、多くの有名なフォーマットは解釈されます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT to_char(CAST(time AS timestamp),'YYYY年MM月dd日HH24時MI分ss秒') FROM log.ltsv\" 2015年09月06日05時58分05秒 2015年09月06日05時58分41秒 2015年09月06日06時00分42秒日付、時刻型に変換されるので、そこから表示するフォーマットに変換するにはto_char()を使用します。指定の仕方はマニュアルを参照して下さい。\nさらに独特なフォーマットの場合は、 to_dateやto_timestampにより自分で定義したフォーマットで解釈させることが出来ます。\n例えば上記で出力したフォーマットの場合、to_charと同じフォーマット指定でto_timestampを実行すれば逆にタイムスタンプとして扱われます。\ntrdsql -ih -oh -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT to_timestamp(\\\"日時\\\",'YYYY年MM月dd日HH24時MI分ss秒') FROM d.csv\" 2015-09-05T20:58:05+09:00 2015-09-05T20:58:41+09:00 2015-09-05T21:00:42+09:00MySQLの日付、時刻処理 MySQLでも多くのフォーマットをdate()やtimestamp()により変換させることができます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -oat \"SELECT date(time),timestamp(time) FROM log.ltsv\" +------------+----------------------------+ | date(time) | timestamp(time) | +------------+----------------------------+ | 2015-09-06 | 2015-09-06 05:58:05.000000 | | 2015-09-06 | 2015-09-06 05:58:41.000000 | | 2015-09-06 | 2015-09-06 06:00:42.000000 | +------------+----------------------------+独自のフォーマットを解釈させる場合は、STR_TO_DATE()を使用します。 上記の年月日時分秒を解釈させるには次のようにします。\ntrdsql -ih -driver mysql -dsn \"noborus:noborus@/trdsql_test\" \"SELECT STR_TO_DATE(\\`日時\\`,'%Y年%m月%d日%H時%i分%s秒') FROM d.csv\" 2015-09-05 20:58:05 2015-09-05 20:58:41 2015-09-05 21:00:42日時から表示するフォーマットには、DATE_FORMAT()が使用できます。「/」で日付を表示してみます。\ntrdsql -ih -driver mysql -dsn \"noborus:noborus@/trdsql_test\" \"SELECT DATE_FORMAT(STR_TO_DATE(\\`日時\\`,'%Y年%m月%d日%H時%i分%s秒'),'%Y/%m/%d') FROM d.csv\" 2015/09/05 2015/09/05 2015/09/05日付、時刻処理はフォーマットがそれぞれ違うので、各データベースのマニュアルを参照して下さい。\n",
    "description": "trdsqlで日付・時刻処理をする方法を説明します。",
    "tags": [
      "trdsql",
      "sql"
    ],
    "title": "trdsql 日付・時刻処理",
    "uri": "/trdsql/20_date/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "これまでtrdsqlでは、JSONの入力が可能と書きましたが、例として書いたのは基本的にフラットな構造のJSONでした。 ただ、２階層以上の階層構造が含まれるJSONはエラーになる訳ではなく、そのまま文字列として扱われます。\n以下のようなJSONがあるとします。\nsample.json\n[ { \"color\": \"white\", \"category\": \"value\", \"code\": { \"rgba\": [0, 0, 0, 1], \"hex\": \"#FFF\" } }, { \"color\": \"red\", \"category\": \"hue\", \"type\": \"primary\", \"code\": { \"rgba\": [255, 0, 0, 1], \"hex\": \"#FF0\" } }, { \"color\": \"blue\", \"category\": \"hue\", \"type\": \"primary\", \"code\": { \"rgba\": [0, 0, 255, 1], \"hex\": \"#00F\" } } ]これをそのままtrdsqlを実行すると以下のようになります(見やすいように-oatを付けています。CSV出力にすると「\"」が含まれる文字列のためエスケープされて出力されます。)\ntrdsql -oat \"SELECT color,category,code FROM sample.json\" +-------+----------+-----------------------------------+ | color | category | code | +-------+----------+-----------------------------------+ | white | value | {\"hex\":\"#FFF\",\"rgba\":[0,0,0,1]} | | red | hue | {\"hex\":\"#FF0\",\"rgba\":[255,0,0,1]} | | blue | hue | {\"hex\":\"#00F\",\"rgba\":[0,0,255,1]} | +-------+----------+-----------------------------------+このcodeは文字列の扱いですが、各データベースは既にJSONを扱える関数を備えているため、データベース側の関数を使って変更できます。\nSQLite3, MySQL SQLite3とMySQLではjson_extract()により$をルートとして（コマンドラインでは$が意味を持つので「\\」でエスケープしてください）、指定した値を取得出来ます。 codeの中の\"hex\"のみを表示するには以下のようにします。\ntrdsql -ijson -oat \"SELECT color,category,json_extract(code,'\\$.hex') AS hex FROM sample.json\" +-------+----------+------+ | color | category | hex | +-------+----------+------+ | white | value | #FFF | | red | hue | #FF0 | | blue | hue | #00F | +-------+----------+------+PostgreSQL PostgreSQLでは、json_extract_path_textを使用して、取得できます。 PostgreSQLで取得する場合は、jsonやjsonbにキャストしてから関数を使用してください。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT color,category,json_extract_path_text(code::json,'hex') AS hex FROM sample.json\" +-------+----------+------+ | color | category | hex | +-------+----------+------+ | white | value | #FFF | | red | hue | #FF0 | | blue | hue | #00F | +-------+----------+------+また、PostgreSQLでは12からjsonb_path_query()でJSON_PATH指定で取得できます（返されるのは、textではなくJSONの値です）。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT color,category,jsonb_path_query(code::jsonb,'\\$.hex')::text AS hex FROM sample.json\" +-------+----------+--------+ | color | category | hex | +-------+----------+--------+ | white | value | \"#FFF\" | | red | hue | \"#FF0\" | | blue | hue | \"#00F\" | +-------+----------+--------+まとめ データベースのJSON関数はさらに多くの関数があり、JSON内のオブジェクトを編集できたりします。しかし、trdsqlでは、JSON出力時にJSONの列も文字列として扱うため、-ojsonでの出力とは相性がよくありません。\nその場合は、データベース側のJSON出力を有効に活用した方が意図通り出力できます。\n",
    "description": "trdsqlでJSONを解析する方法を説明します。",
    "tags": [
      "trdsql",
      "sql",
      "json"
    ],
    "title": "trdsql JSON解析",
    "uri": "/trdsql/21_json_parse/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "CSVやLTSVなどのフラットな形式のデータは、JSONにしたいときには（-ojsonによる）JSON出力をすれば良いですが、JSONは本来より深い階層も表現できるフォーマットです。\nそのようなJSONは、データベースのJSON関数を使用することにより作成できます。\n以下のCSVからJSON関数でJSON出力をしてみます。\nid,name 1,Orange 2,Melon 3,AppleJSON関数で出力する場合は、「”」等がエスケープされない-orawを使用して出力すると、有効なJSONとして出力できます。\nSQLite3、MySQL SQLite3、MySQLでは、json_array()やjson_object()を使用することによりJSONを生成できます。 ここでは「名前:値」の形式で出力するためjson_objectを使用します。2つペアの引数で、指定していきます。\ntrdsql -ih -oraw \"SELECT json_object('id',id,'name',name) FROM header.csv\" {\"id\":\"1\",\"name\":\"Orange\"} {\"id\":\"2\",\"name\":\"Melon\"} {\"id\":\"3\",\"name\":\"Apple\"}階層を深くするには、json_object()を内部でさらに使います。 SQLite3にはjson_pretty()関数が無いので、jqで見やすくしています。\ntrdsql -ih -oraw \"SELECT json_object('fruits', json_object('id',id,'name',name)) FROM header.csv\"|jq . { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } } { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } } { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } }上記の結果は1行1JSONで出力されています。これをさらに配列にして、一つのJSONにするには、SQLite3では json_group_array()、MySQLではjson_arrayagg()でグループ化して出力できます。\nSQLite3 trdsql -ih -oraw \"SELECT json_group_array(json_object('fruits', json_object('id',id,'name',name))) FROM header.csv\"|jq . [ { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } }, { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } }, { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } } ]MySQL trdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih -oraw \"SELECT json_pretty(json_arrayagg(json_object('fruits', json_object('id',id,'name',name)))) \"\\ \"FROM header.csv\" [ { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } }, { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } }, { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } } ]MySQLでは、結果をjson_pretty()で処理すれば、同じようなインデントで表示できます。\nPostgreSQL PostgreSQLでは、JSONを扱うのにjsonとjsonbの２つの型があり、関数もそれぞれあります。\n格納されるときには、jsonbはバイナリ形式でJSONとして有効かチェックされるなど違いがあります。また、関数が一方にしかない場合があるので、考慮して使用してください。\n今回は jsonb_pretty()がjsonbにしかないので、jsonb関数を使用します。SQLite3やMySQLのjson_object()とほぼ同じ動作をする関数jsonb_build_object()を使用するとJSONを生成できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oraw \"SELECT jsonb_pretty(jsonb_build_object('fruits', jsonb_build_object('id',id,'name',name))) \"\\ \"FROM header.csv\" { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } } { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } } { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } }これをさらに配列にして一つのJSONにするには、json_agg()又はjsonb_agg()を使用します。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oraw \"SELECT jsonb_pretty(jsonb_agg(jsonb_build_object('fruits', jsonb_build_object('id',id,'name',name)))) FROM header.csv\" [ { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } }, { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } }, { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } } ]",
    "description": "trdsqlでJSONを出力する方法を説明します。",
    "tags": [
      "trdsql",
      "sql",
      "json"
    ],
    "title": "trdsql JSON出力",
    "uri": "/trdsql/22_json_output/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "CSV同士やCSVとテーブルなどで、値の比較をしたい場合があります。\n同じ形式で一部が違うCSVファイルであれば、diffを取る方法もありますが、trdsqlのSQLを使用して比較すると形式が違う場合の比較にも使用できます。\n差分の出力 SQLで比較して、差分を出すには、EXCEPTを使用します。EXCEPTは Aのテーブルから Bのテーブルを引いた残りのAの内容を出力します。\nBの方に多くの行があっても関係なく、AにあってBにない行を出力します。\n以下のCSVファイルで比較してみます。new.csvで、3の更新と4の追加があるCSVファイルです。\nold.csv\n1,AAA 2,BBB 3,CCCnew.csv\n1,AAA 2,BBB 3,CCB 4,DDD単純に全列を比較すると1と2の行が同じであるため、消されて残った3と4が出力されます。 この場合old.csv側にnew.csvにない行があっても出力されません。diffの比較とは違いますね。\ntrdsql \"SELECT * FROM new.csv EXCEPT SELECT * FROM old.csv \" 3,CCB 4,DDDテーブルとファイルの差分出力 既存のデータベースに接続すれば、テーブルとの比較もできます。\n例えば、trdsql DBインポートでインポートしたテーブルと更新されたCSVとの比較をしたいときには、以下のようにすると良いでしょう。\nCSVファイル側をキャストして型を合わせています。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT id::int,name FROM fruits.csv \" \\ \"EXCEPT \" \\ \"SELECT id,name FROM fruits \" id,name 4,Grapeデータベース側のテーブルが更新されて新しい場合は、逆にテーブル EXCEPT CSVファイルとすれば、良いでしょう。\n共通の行の出力 また、EXCEPTとは逆に共通の行を出力させたいときには、INTERSECT を使用します。\n\"SELECT id::int,name FROM fruits.csv \" \\ \"INTERSECT \" \\ \"SELECT id,name FROM fruits\" id,name 1,Orange 2,Melon 3,Apple",
    "description": "trdsqlでCSV同士やCSVとテーブルなどで、値の比較をしたい場合があります。",
    "tags": [
      "trdsql",
      "sql",
      "except"
    ],
    "title": "trdsql 差分、比較",
    "uri": "/trdsql/23_except/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "trdsqlは、グラフ作成機能は持っていないためグラフを作成したいときには別のツールを使用して作成することになります。\nExcelやLibreOfficeで描画するのが定番でしょうが、ここではmarianogappa/chartでグラフを描画する方法を紹介します。\nmarianogappa/chartは、Goで作られていて、や多くのプラットフォームで動作して、標準入力から受け取ったデータをブラウザに描画します。\n複雑なグラフには向いていませんが、簡単なグラフを少ないオプションを指定するだけで描画できます。\nchartに与えるデータは表示したいグラフによりますが、1列又は2列のデータです。\n例えばchartのデフォルトのpieでは、以下のような文字列が並んでいるようなデータを集計して円グラフにしてくれます。\naaa bbb ccc aaa aaa aaacat aaa.csv|chart（ブラウザが開いて表示されます）\nこれを使用して例えば、ログ集計で使用したログのリクエストをグラフにすると以下のようになります。\ntrdsql \"SELECT req FROM log.ltsv\"|chart また、他のグラフでは、1列目がx項目名で、2列目が値として与えます。デフォルトはタブ区切りのデータを受け取るので、タブ区切りで出力します。\nログ集計のリクエストが多い順をTOP 20に変えて出力すると以下のようになります。\ntrdsql -od \"\\t\" \\ \"SELECT req, count(req) as count \" \\ \"FROM log.ltsv \" \\ \"GROUP BY req \" \\ \"ORDER BY count DESC LIMIT 20\" |chart bar marianogappa/chartは、Chart.jsを使用してグラフを描画しています。Chart.js自体が簡単なJavaScriptを用意すれば描画してくれるので、もう少し複雑なグラフを描きたい場合は直接利用するのが良いでしょう。\n",
    "description": "trdsqlでグラフを作成する方法を紹介します。",
    "tags": [
      "trdsql",
      "sql",
      "graph"
    ],
    "title": "trdsql グラフ",
    "uri": "/trdsql/24_graph/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "trdsqlは初期の頃は、main packageで構成されていましたが、現在はtrdsql packageをmainから呼び出す構成になっていて、trdsql packageをライブラリとして使用できます。\ntrdsqlのパッケージは、以下の構成になっていて、それぞれ呼び出し可能です。\n簡単なサンプルを示します。\npackage main import ( \"log\" \"github.com/noborus/trdsql\" ) func main() { trd := trdsql.NewTRDSQL( trdsql.NewImporter(trdsql.InDelimiter(\":\")), trdsql.NewExporter(trdsql.NewWriter()), ) err := trd.Exec(\"SELECT c1 FROM /etc/passwd\") if err != nil { log.Fatal(err) } }上記のプログラムは/etc/passwdに対してSQL文を実行しています。 Importer(データベースにインポートするインターフェイス）とExporter(データベースから結果を出力するインターフェイス）を与えてTRDSQLをNewし、Execで実行するのが、おおまかな流れです。\nfunc NewTRDSQL(im Importer, ex Exporter) *TRDSQLこのImporter,Exporterはインターフェイスに沿っていれば、置き換えられます（例えば、SQL内のファイルをインポートするのではなく、独自にインポートするにはImporterのインターフェイスに沿った関数を作成します）。\nImporter デフォルトのImporterは、trdsql.NewImporter()を呼び出せば作成できます。 デフォルトのImporterはtrdsql.Import()でReadOptsのオプションを取ります。ここでフォーマットやその他オプションを渡します。\nSQL文にある「/etc/passwd」をデータベースにインポートして使用するのは、デフォルトの動作のため、区切り文字のみ「:」に変更しています。\ntrdsql.Import()はSQL文を受け取り、必要なファイルをデータベースにインポートします。そのときにファイルの形式に合わせたtrdsql.Readerインターフェイス（各CSV,LTSV,JSON,TBLNのReader)からテーブルへインポートされます。\nまた、インポートするデータベースによってバルクインサートかCOPYによるインポートを選択してインポートしています。\nExporter デフォルトのExporterは、trdsql.NewExporter()を呼び出せば作成できます。 SQLでは出力は1つなので、出力する関数（trdsql.NewWriter()）を渡しています。 trdsql.NewWriter()はWriteOptsによりフォーマットと動作のオプションを設定して、実際のWriter関数（CSV、LTSV、JSON、TBLN、AT、VF…)によりSQLを実行した結果を書き出します。\nExec ImporterとExporterの準備が済んでいれば、ExecでSQLを実際に実行します。\nデータベース接続 トランザクションの開始 Importerでインポートの実行 Exporterで指定したSQLの実行をして出力 トランザクションの終了 データベース切断 参考資料 trdsqlには、参考してファイルからのインポートだけでなく、スライスからインポートする関数が入っています。 それを利用したサンプルが _example/slice/ にあります。\nまた、trdsql packageを利用してshirou/gopsutilの結果をSQLで取得できるようにしたものが、 noborus/psutilsql です。\ntrdsqlのgodocも参考にして下さい。\n",
    "description": "trdsqlのライブラリ使用方法を簡単に説明します。",
    "tags": [
      "trdsql",
      "sql",
      "library"
    ],
    "title": "trdsql ライブラリ使用",
    "uri": "/trdsql/25_library/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "SQLファイル名指定オプション「-q」 trdsql “SQLコマンド\"の形式だと、長いSQLを書くのが難しいですし、シェルに対してエスケープしなければならない文字があって見た目もわかりにくい場合があります。\ntrdsqlではファイルにSQLを書いておき、そのファイルのSQLを実行させるオプションがあります。\n以下のように記述したSQLをtest.sqlで保存しておきます。\ntest.sql\nSELECT id, `name` FROM testsql.csv（コマンドの引数で渡していたときは「\\`」のように「`」をエスケープする必要がありましたが、ファイルのSQLを実行する場合は必要ありません）。\ntestsql.csv は対象となるCSVファイルです。\nid,name 1,tarou 2,jirou“SQLコマンド” の代わりに 「-q ファイル名.sql」で実行します。それ以外のオプションは代わりません。\ntrdsql -ih -oat -q test.sql+----+-------+ | id | name | +----+-------+ | 1 | tarou | | 2 | jirou | +----+-------+",
    "description": "trdsql SQLファイル指定",
    "tags": [
      "trdsql",
      "sql",
      "file"
    ],
    "title": "trdsql SQLファイル指定",
    "uri": "/trdsql/26_file_sql/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "trdsqlは設定ファイルが無くても動作しますが、設定ファイルによりデフォルトのデータベースのエンジンを変更できます。\nconfigファイルの場所 -configオプションで、直接ファイルの場所を指定できます。\n-configオプションを使用しないデフォルトの場所は以下です。\nLinux等のWindows以外 ${HOME}/.config/trdsql/config.jsonWindows %APPDATA%trdsql\\config.json です。多くは以下の位置になります。\nC:\\Users\\{\"User\"}\\AppData\\Roaming\\trdsql\\config.jsonconfigファイルの内容 以下がサンプルです。\n{ \"db\": \"pdb\", \"database\": { \"sdb\": { \"driver\": \"sqlite3\", \"dsn\": \"\" }, \"pdb\": { \"driver\": \"postgres\", \"dsn\": \"user=test dbname=test\" }, \"mdb\": { \"driver\": \"mysql\", \"dsn\": \"user:password@/dbname\" } } }“database” に “名前”: {“driver”: ドライバ名(sqlite3 or postgres or mysql), “dsn”: “ドライバに沿ったDSN”} でデータベースを定義しておき、最初の “db\"に定義した\"名前\"を書くとデフォルトのエンジンが変更されます。\n上記では、“pdb\"がデフォルトになり、“postgres\"エンジンが使用されます。\nデフォルトの変更だけでなく、ここで定義しておくと trdsqlのオプション -db mdb を指定することにより、簡単にmysqlドライバのエンジンに切り替えられます。\n確認方法 configファイルが無くても動作するため、実際にエンジンが変更されているかわかりにくいことがあります。\ntrdsqlを-debugオプション付きで起動すると詳細が表示されますので、そこで確認して下さい。\n設定ファイルが見つからなかった場合 trdsql -debug -db pdb \"SELECT * FROM testdata/test.csv\" 2019/12/27 11:22:13 configOpen: open /home/noborus/.config/trdsql/config.json: no such file or directory 2019/12/27 11:22:13 ERROR: db[pdb] does not found 2019/12/27 11:22:13 driver: sqlite3, dsn: 2019/12/27 11:22:13 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv] ...（省略） 設定ファイルが見つかった場合 trdsql -debug -db pdb \"SELECT * FROM testdata/test.csv\" 2019/12/27 11:30:18 config found: config.json.sample 2019/12/27 11:30:18 [driver: sdb:sqlite3:] 2019/12/27 11:30:18 \u003e[driver: pdb:postgres:user=test dbname=test] 2019/12/27 11:30:18 [driver: mdb:mysql:user:password@/dbname] 2019/12/27 11:30:18 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv] ...（省略） 4行目にある「\u003e」によって、pdbが使用されていることがわかります。\n",
    "description": "trdsqlの設定ファイルについて説明します。",
    "tags": [
      "trdsql",
      "config",
      "設定"
    ],
    "title": "trdsql config",
    "uri": "/trdsql/27_config/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "CROSS JOINは、総当りを簡単に作り出せる方法です。\na.csv\naa ab acb.csv\nba bb bcの２つのCSVをCROSS JOINすると 3×3で全ての組み合わせを出力できます。\ntrdsql \"SELECT * FROM a.csv CROSS JOIN b.csv\" aa,ba aa,bb aa,bc ab,ba ab,bb ab,bc ac,ba ac,bb ac,bcまた一つのファイルに対して自己結合をすることもできます。 例えば、ホーム＆アウェーの総当り表を作成してみます。\ncleague.csv\nteam 巨人 DeNA 阪神 広島 中日 ヤクルト単純にCROSS JOINするには以下のようになります（JOIN条件は無いので書けません）。\ntrdsql -ih \\ \"SELECT h.team,a.team \"\\ \" FROM cleague.csv AS h \"\\ \" CROSS JOIN cleague.csv AS a\"自分のチームとは対戦出来ないので、同じチームのときをWHERE h.team != a.teamにより除外します。\ntrdsql -ih -omd \\ \"SELECT h.team AS home,a.team AS aware \" \\ \" FROM cleague.csv AS h CROSS JOIN cleague.csv AS a \"\\ \" WHERE h.team != a.team \" home aware 巨人 DeNA 巨人 阪神 巨人 広島 巨人 中日 巨人 ヤクルト DeNA 巨人 DeNA 阪神 DeNA 広島 DeNA 中日 DeNA ヤクルト 阪神 巨人 阪神 DeNA 阪神 広島 阪神 中日 阪神 ヤクルト 広島 巨人 広島 DeNA 広島 阪神 広島 中日 広島 ヤクルト 中日 巨人 中日 DeNA 中日 阪神 中日 広島 中日 ヤクルト ヤクルト 巨人 ヤクルト DeNA ヤクルト 阪神 ヤクルト 広島 ヤクルト 中日 ",
    "description": "trdsqlでCROSS JOINを使ってみます。",
    "tags": [
      "trdsql",
      "CROSS",
      "JOIN"
    ],
    "title": "trdsql CROSS JOIN",
    "uri": "/trdsql/28_cross_join/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "generate_series PostgreSQLにはgenerate_series()という便利な関数があります。 これはUnixのseqコマンドと同じような働きをする関数です。またgenerate_series()は、タイムスタンプ型にも使用できる拡張があります。\n使い方は簡単で「開始値」、「終了値」、「刻み値（省略可能）」を指定して実行します。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT * FROM generate_series(1,10)\" 1 2 3 4 5 6 7 8 9 10generate_series()はテーブルを返す関数で、テーブルの代わりに使用できます。 （SELECT generate_series(1,10)と書くこともできます）。\nもちろん、trdsqlでは、外部からの入力を簡単に取り入れられるので、seqコマンドで代用することもできます。\nseq 1 10|trdsql \"SELECT * FROM -\" 1 2 3 4 5 6 7 8 9 10seqコマンドは、引数の順序が「開始値」、「刻み値（省略可能）」「終了値」になります。 2つの値を渡すときには同じですが、刻み値を指定する場合は、順序が異なるので注意が必要です。\nタイムスタンプ generate_series()では、タイムスタンプを扱えるので、2020年のカレンダーを日本語で出すと少々トリッキーですが、以下のようになります。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SET LC_TIME='ja_JP.UTF-8'; \" \\ \"SELECT to_char(day,'YYYY年TMMonthDD日 (TMDay)') \" \\ \" FROM generate_series('2020-01-1'::timestamp,'2020-12-31','1 day') as day\" 2020年1月01日 (水曜日) 2020年1月02日 (木曜日) 2020年1月03日 (金曜日) 2020年1月04日 (土曜日) .... 2020年12月29日 (火曜日) 2020年12月30日 (水曜日) 2020年12月31日 (木曜日)データを数倍にする ある程度まとまった数のダミーデータが欲しい場合があります。完全に分散したランダムなデータが欲しい場合は専用のツールを使う必要がありますが、 単純に既にあるデータの件数を増やしたいだけであれば、generate_series()や seqコマンドとCROSS JOINすることで作成できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT ROW_NUMBER() OVER() AS id, name \" \\ \" FROM header.csv CROSS JOIN generate_series(1,3) AS s\" id,name 1,Orange 2,Melon 3,Apple 4,Orange 5,Melon 6,Apple 7,Orange 8,Melon 9,Appleseqコマンドを利用すると以下になります。\n（-ih でヘッダーがあるファイルを処理しているときには、seqの1行目もヘッダーと解釈されるので、 1行余分に出力されるように0から開始すると同様の動きになります）。\nseq 0 3|trdsql -driver sqlite3 -ih -oh \\ \"SELECT ROW_NUMBER() OVER() AS id, name \" \\ \" FROM - CROSS JOIN header.csv\" id,name 1,Orange 2,Melon 3,Apple 4,Orange 5,Melon 6,Apple 7,Orange 8,Melon 9,Apple",
    "description": "trdsqlでgenerate_series()を使ってみます。",
    "tags": [
      "trdsql",
      "generate_series",
      "PostgreSQL"
    ],
    "title": "trdsql generate_series",
    "uri": "/trdsql/29_generate_series/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "既存のログをLTSVに変換する 既存のログをLTSVに変換にしてみます。\nmingrammer/flog を使用するとフェイクのログが簡単に出力できるので、 これで出力されるログをLTSV形式に変換する方法を紹介します。\nApache common log 以下のコマンドにより apache_common形式のログをaccess.common.logとして保存します。\nflog -f apache_common -t log -o access.common.log 内容は、以下のようになります。\n92.129.44.198 - metz3917 [30/Dec/2019:17:02:27 +0900] \"DELETE /infomediaries/e-markets HTTP/2.0\" 500 24843 246.54.243.199 - - [30/Dec/2019:17:02:27 +0900] \"POST /24%2f7 HTTP/1.1\" 302 8879 9.172.27.159 - - [30/Dec/2019:17:02:27 +0900] \"DELETE /convergence/best-of-breed HTTP/1.1\" 203 3252 49.129.77.219 - kozey2248 [30/Dec/2019:17:02:27 +0900] \"PUT /embrace HTTP/1.1\" 301 2812 216.42.120.216 - - [30/Dec/2019:17:02:27 +0900] \"HEAD /infomediaries HTTP/2.0\" 204 12516これを trdsqlの -id \" \" によりスペース区切りで解析すると c4とc5でタイムが分かれてしまいますが、それ以外は問題無さそうです。\n+---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+ | c1 | c2 | c3 | c4 | c5 | c6 | c7 | c8 | +---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+ | 92.129.44.198 | - | metz3917 | [30/Dec/2019:17:02:27 | +0900] | DELETE | 500 | 24843 | | | | | | | /infomediaries/e-markets | | | | | | | | | HTTP/2.0 | | | +---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+適切なラベルを付けるようにしてLTSVで出力します。\ntrdsql -id \" \" -oltsv \\ \"SELECT c1 AS host, c2 AS ident, c3 as user, c4||' '||c5 AS time, c6 AS req, c7 AS status, c8 as size \"\\ \" FROM access.common.log\"host:92.129.44.198\tident:-\tuser:metz3917\ttime:[30/Dec/2019:17:02:27 +0900]\treq:DELETE /infomediaries/e-markets HTTP/2.0\tstatus:500\tsize:24843 host:246.54.243.199\tident:-\tuser:-\ttime:[30/Dec/2019:17:02:27 +0900]\treq:POST /24%2f7 HTTP/1.1\tstatus:302\tsize:8879 host:9.172.27.159\tident:-\tuser:-\ttime:[30/Dec/2019:17:02:27 +0900]\treq:DELETE /convergence/best-of-breed HTTP/1.1\tstatus:203\tsize:3252 host:49.129.77.219\tident:-\tuser:kozey2248\ttime:[30/Dec/2019:17:02:27 +0900]\treq:PUT /embrace HTTP/1.1\tstatus:301\tsize:2812 host:216.42.120.216\tident:-\tuser:-\ttime:[30/Dec/2019:17:02:27 +0900]\treq:HEAD /infomediaries HTTP/2.0\tstatus:204\tsize:12516Apache Combined Log Combined Log も項目が増えるだけで基本的に同じです。\n作成は以下で行いました。\nflog -f apache_combined -t log -o access.combined.logtrdsql -id \" \" -oltsv \\ \"SELECT c1 AS host, c2 AS ident, c3 AS user ,c4||' '||c5 AS time, c6 AS req , c7 AS status, c8 AS size, c9 AS refer, c10 AS ua \"\\ \" FROM access.combined.log\"host:25.54.196.41\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:POST /harness/deliver HTTP/2.0\tstatus:204\tsize:8501\trefer:https://www.directconvergence.biz/real-time/web-readiness/models/facilitate\tua:Opera/9.84 (X11; Linux x86_64; en-US) Presto/2.10.211 Version/12.00 host:60.50.255.15\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:PATCH /end-to-end HTTP/2.0\tstatus:405\tsize:3834\trefer:http://www.district24/365.net/schemas\tua:Mozilla/5.0 (iPad; CPU OS 7_2_1 like Mac OS X; en-US) AppleWebKit/532.17.5 (KHTML, like Gecko) Version/5.0.5 Mobile/8B119 Safari/6532.17.5 host:56.46.161.47\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:PATCH /architect/turn-key/clicks-and-mortar/killer HTTP/1.1\tstatus:304\tsize:63656\trefer:http://www.principalbest-of-breed.com/morph/magnetic/turn-key/cross-media\tua:Mozilla/5.0 (Windows NT 5.2; en-US; rv:1.9.3.20) Gecko/1931-04-08 Firefox/36.0 host:48.195.162.51\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:PATCH /enhance/extend HTTP/2.0\tstatus:405\tsize:13091\trefer:http://www.districtmorph.name/customized/cutting-edge\tua:Opera/10.97 (X11; Linux i686; en-US) Presto/2.8.259 Version/10.00",
    "description": "trdsqlで既存のログをLTSVに変換する方法を紹介します。",
    "tags": [
      "trdsql",
      "apache",
      "nginx",
      "log",
      "ltsv"
    ],
    "title": "trdsql convert log",
    "uri": "/trdsql/30_convert_log/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "Window関数により元のファイルの内容に列を追加して、集計結果を出せました。 ただ、人が確認する場合は、集計の結果行が最後に出るほうが確認しやすくなります。\n通常のSQLでも元の内容と集計結果を別々に出してUNIONを使うことで、一つの結果として出すことが出来ますが、一回で済むならばそれに越したことはありません。\nSQLite3ではサポートされていませんが、PostgreSQLとMySQLならばサポートされている文があります。\nROLLUP Window関数でも使用した以下のCSVファイルを使用します。\nid,class,name,score 1,A,bob,174 2,A,alice,248 3,A,carol,163 4,B,dave,289 5,B,eve,157 6,B,flank,272通常のGROUP BYで全体の合計又は、class毎の合計が出せました。 ただし、class毎の合計と全体の合計を出すにはWindow関数を使用して別の列に出していました。\nGROUP BYに ROLLUPを指定することで、両方を出力できます。\nPostgreSQL PostgreSQLでは、GROUP BY 列名の代わりにGROUP BY ROLLUP(列名)を使用することで、通常のGROUP BYに加えて、全体の集計結果を出力します。\ntrdsql -driver \"postgres\" -dsn \"dbname=trdsql_test\" -oat -ih \\ \"SELECT class, SUM(score::int) AS score FROM score.csv GROUP BY ROLLUP(class) ORDER BY class\" +-------+------+ | class | sum | +-------+------+ | A | 585 | | B | 718 | | | 1303 | +-------+------+MySQL MySQLでは、GROUP BY 列名の後に WITH ROLLUPを付けると、通常のGROUP BYに加えて、全体の集計結果を出力します。\ntrdsql -driver mysql -oat -ih \\ \"SELECT class, SUM(CAST(score AS SIGNED)) AS score FROM score.csv GROUP BY class WITH ROLLUP \" +-------+-------+ | class | score | +-------+-------+ | A | 585 | | B | 718 | | | 1303 | +-------+-------+GROUPING SETS PostgreSQLでは、さらに柔軟に出力することができます。\n通常のCSVの内容に追加して、classの小計と全体の合計を出したい場合は、更にグループ化を制御する必要があります。 GROUPING SETSは柔軟なグループ化が可能です。\nGROUPING SETSで id,name,class（つまりid別ですが、nameとclassも出力対象に含めるため、指定します）、class別、総合計（指定なし）の３つのグループ化をして出力すると以下のように、小計、合計が出力できます。\ntrdsql -driver \"postgres\" -dsn \"dbname=trdsql_test\" -oat -ih \\ \"SELECT id, name,class, SUM(score::int) AS score \" \\ \" FROM score.csv GROUP BY GROUPING SETS((class,id,name),(class),()) \"\\ \" ORDER BY class\" +----+-------+-------+-------+ | id | name | class | score | +----+-------+-------+-------+ | 1 | bob | A | 174 | | 2 | alice | A | 248 | | 3 | carol | A | 163 | | | | A | 585 | | 4 | dave | B | 289 | | 5 | eve | B | 157 | | 6 | flank | B | 272 | | | | B | 718 | | | | | 1303 | +----+-------+-------+-------+上記の GROUPING SETSは、ROLLUP(class,(id,name))で簡略化できます。\ntrdsql -driver \"postgres\" -dsn \"dbname=trdsql_test\" -oat -ih \\ \"SELECT id,name,class, SUM(score::int) AS score \" \\ \" FROM score.csv GROUP BY ROLLUP(class,(id,name)) \" \\ \" ORDER BY class\"ROLLUP(class,id,name) とするとidとnameそれぞれで、グループ化してしまうので、同じscoreの行が2行づつ出てしまいます。 idとnameは１つにしつつ、class,(id,name)のそれぞれでグループ化するとGROUPING SETSと同じ意味になります。\nMySQL MySQLでは、GROUPING SETSがないので、class,id毎でWITH ROLLUPにり結果は出せますが、nameを出力することは出来ません。\ntrdsql -driver mysql -oat -ih \\ \"SELECT id,class, SUM(CAST(score AS SIGNED)) AS score \" \\ \" FROM score.csv GROUP BY class,id WITH ROLLUP\" +----+-------+-------+ | id | class | score | +----+-------+-------+ | 1 | A | 174 | | 2 | A | 248 | | 3 | A | 163 | | | A | 585 | | 4 | B | 289 | | 5 | B | 157 | | 6 | B | 272 | | | B | 718 | | | | 1303 | +----+-------+-------+nameの方を集約させてしまうという手もありかもしれません。 GROUP_CONCAT()により文字列を接続することで、集約できます。\ntrdsql -driver mysql -oat -ih \\ \"SELECT id,GROUP_CONCAT(name) as name,class, SUM(CAST(score AS SIGNED)) AS score \" \\ \" FROM score.csv GROUP BY class,id WITH ROLLUP\" +----+--------------------------------+-------+-------+ | id | name | class | score | +----+--------------------------------+-------+-------+ | 1 | bob | A | 174 | | 2 | alice | A | 248 | | 3 | carol | A | 163 | | | bob,alice,carol | A | 585 | | 4 | dave | B | 289 | | 5 | eve | B | 157 | | 6 | flank | B | 272 | | | dave,eve,flank | B | 718 | | | bob,alice,carol,dave,eve,flank | | 1303 | +----+--------------------------------+-------+-------+",
    "description": "trdsqlでROLLUPを使ってみます。",
    "tags": [
      "trdsql",
      "MySQL",
      "PostgreSQL",
      "ROLLUP"
    ],
    "title": "trdsql 合計を行に追加する",
    "uri": "/trdsql/31_rollup/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "CASE式は、プログラム言語のif文やswitch文のような条件に分岐した処理をおこないます。単純な1を’A’に変換するような場合は、一時的なテーブルとJOINさせたり文字列の書き換えで可能ですが、 範囲を指定してグループ化したい場合はCASE式を使うと便利です。\nCASE式には以下の2つのパターンどちらも使用できます。\nCASEは CASE 式（列) WHEN 値 THEN 結果とCASEの後に式を書いて、WHENが値だけのパターンと CASE WHEN 式 THEN 結果 とCASEの式を省略してWHENに式を書くパターン 必要であれば、ELSE 結果で当てはまらない場合を書き、ENDで式の終わりを示します。\ncase.csv のようなCSVを使用して、scoreが80以上の場合は’A’、30以上の場合は、‘B’、30より下の場合は、‘F’と表示させてみます。\nid,name,score 1,bob,89 2,alice,75 3,dave,23trdsql -ih -oat \\ \"SELECT id,name,score, \" \\ \" CASE WHEN CAST(score AS int) \u003e= 80 THEN 'A' \" \\ \" WHEN CAST(score AS int) \u003e= 30 THEN 'B' \" \\ \" ELSE 'F' \" \\ \" END AS evaluation \" \\ \" FROM case.csv\" +----+-------+-------+------------+ | id | name | score | evaluation | +----+-------+-------+------------+ | 1 | bob | 89 | A | | 2 | alice | 75 | B | | 3 | dave | 23 | F | +----+-------+-------+------------+CASE式は書いた先から評価されます。\nまた式は1つの列をである必要が無いので、WHEN name = 'dave' THEN 'D' という条件を追加することも可能です。\n",
    "description": "trdsqlでCASE式を使ってみます。",
    "tags": [
      "trdsql",
      "CASE"
    ],
    "title": "trdsql CASE式",
    "uri": "/trdsql/32_case/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "圧縮ファイルに実行 0.7.4までは gzip(.gz)の圧縮形式のみの対応でしたが、最新のmaster(0.7.5以降の予定)では、gzip(gz)、bzip2(bz2)、zstd(zst)、lz4、xzの圧縮形式に対応しました。\n従来は.gzの拡張子をみて判断していましたが、今回から圧縮形式のファイルの先頭のマジックナンバー（signatureの値）を見て判断するようになりました。そのため、拡張子が何であっても上記の圧縮形式はそのまま読み取ることが出来ます。\n圧縮率にもよりますが、デフォルトレベルのzstdでの圧縮されたファイルをtrdsqlで処理すると、手元のマシンでの処理時間はほぼ変わらないか、少しzstdで圧縮されているファイルのほうが早いくらいです。\n例えば以下のような145MBのファイルに対してzstdで圧縮すると44MBになりました。\n145M worldcitiespop.csv 44M worldcitiespop.csv.zst timeを付けての結果は以下のようになりました。\n/usr/bin/time -p trdsql -ih \"SELECT count(*) FROM worldcitiespop.csv\" real 11.47 user 11.76 sys 0.70 zstd圧縮\n/usr/bin/time -p trdsql -ih \"SELECT count(*) FROM worldcitiespop.csv.zst\" real 9.76 user 11.00 sys 0.37 LTSVファイルでは、同じ内容のCSVファイルよりもファイルサイズが大きくなりますが、圧縮効率は良いので圧縮したときのファイルサイズの差は小さくなります。\n330M worldcitiespop.ltsv 54M worldcitiespop.ltsv.zst 145MBをLTSVにすると330MBのファイルになっていたのが、圧縮するとCSV:44MB、LTSV:54MBになります。\n処理時間は以下のようになりました。\n/usr/bin/time -p trdsql \"SELECT count(*) FROM worldcitiespop.ltsv real 16.72 user 17.41 sys 1.05 /usr/bin/time -p trdsql \"SELECT count(*) FROM worldcitiespop.ltsv.zst\" 3173958 real 13.93 user 16.02 sys 0.55 大きなLTSVファイルはzstdで圧縮しておくのが、サイズ的にも速度的にもおすすめです。\n圧縮して出力 また、圧縮しての出力にも対応しました。 -oz 圧縮形式[gz,bz2,zst,lz4,xz]を指定すると圧縮して出力されます。\ntrdsql -oz gz \"SELECT * FROM testdata/test.csv\" \u003e test.csv.gz trdsql -oz zst \"SELECT * FROM testdata/test.csv\" \u003e test.csv.zst また-out ファイル名ではファイル名から推測して出力する機能があります。\n詳細はファイル名を指定しての出力を参照して下さい。\n",
    "description": "trdsqlで圧縮ファイルを読み込みます。",
    "tags": [
      "trdsql",
      "圧縮ファイル"
    ],
    "title": "trdsql 圧縮ファイル",
    "uri": "/trdsql/33_compression/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "今までは標準出力にのみ出力していましたが、-out ファイル名により、出力ファイルを指定できるようにしました。\n-out ファイル名では出力ファイル名からファイル形式、圧縮形式を推測するモードをデフォルトで有効にしてあります。\n出力ファイル名の拡張子が[.csv,.ltsv,json,jsonl,tbln,md,at,vf,raw]等の出力ファイル形式の拡張子だった場合は自動でその出力形式で出力します。\n以下はLTSV形式で出力します。\ntrdsql -out test.ltsv \"SELECT * FROM testdata/test.csv\" 出力フォーマットを指定した場合は、出力フォーマットが優先されます。以下はjsonl形式で出力されます。\ntrdsql -ojsonl -out test.txt \"SELECT * FROM testdata/test.csv\" 圧縮形式も推測するので、test.csv.gzのようにした場合はCSV形式のgzip圧縮で出力されます。基本的ファイルの拡張子はファイル形式.圧縮形式の順です。\n以下はLTSV形式でzstd圧縮で出力されます。\ntrdsql -out test.ltsv.zst \"SELECT * FROM testdata/test.csv\" 圧縮フォーマットも-oz 圧縮形式で指定した場合はそちらが優先されます。\n例えば、.zstの拡張子を付けたいが圧縮してほしくない（理由はわかりませんが…)の場合は、-out-without-guessを付けて実行して下さい。\n",
    "description": "trdsqlで出力ファイルを指定できるようにしました。",
    "tags": [
      "trdsql",
      "output"
    ],
    "title": "trdsql output",
    "uri": "/trdsql/34_output/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "これまでtdsqlが対象とするJSONはフラットなJSONでした。そのためSQLの対象となるのはトップレベルのオブジェクトでした。\n[ {\"age\": \"26\", \"name\": \"Tanaka\"}, {\"age\": \"32\", \"name\": \"Suzuki\"} ]JSONは階層を深くすることができるので、さらに下の階層をSQLの対象としたい場合がありました。 SQLの関数を使用して、アクセスすることも出来ますが、少し面倒でした。\n{ \"list\": [ {\"age\": \"26\", \"name\": \"Tanaka\"}, {\"age\": \"32\", \"name\": \"Suzuki\"} ] }tdsqlではJSONに対し、まずjqの構文を使用して処理し、その結果に対してSQLを実行できます。 jqの構文はファイル名の後に\"::“を付け、その後に書きます。 jqの構文なので、主に”.“ドットではじまり、中の値にアクセスします。\n（jsonを対象とすると配列全体を１つの列と解釈してしまう）。\ntrdsql \"SELECT * FROM example0-s.json \"[{\"\"age\"\":\"\"26\"\",\"\"name\"\":\"\"Tanaka\"\"},{\"\"age\"\":\"\"32\"\",\"\"name\"\":\"\"Suzuki\"\"}]\" （listをテーブルとして解釈して、中のオブジェクトを列にする）。\ntrdsql \"SELECT * FROM example0-s.json::.list 26,Tanaka 32,Suzuki 深い階層にアクセスしたいときは、jqの構文では .list.menu.itemのようにドットで繋いでいけば簡単にアクセスすることができます。 階層途中に配列があってもjqの構文（[]等が含まれる場合は「\"」で括る等してください）が書ければアクセスすることができます。\ntrdsql \"SELECT * FROM example0-s.json::\\\".list[1].name\\\"\" 複雑な集計をjqで書くのは難しいため、対象をテーブル化することでSQLで集計するといったことができます。 また、CSVや他の形式に変換するのもtrdsqlでは簡単です。\n",
    "description": "trdsqlでjq構文を使用してJSONをSQLの対象とする方法を説明します。",
    "tags": [
      "trdsql",
      "jq",
      "json"
    ],
    "title": "trdsql jq構文",
    "uri": "/trdsql/35_jq/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "Exec mode executes commands from ov. In Exec mode, stdout and stderr can be displayed as separate documents.\nBy using it at the same time as --follow-all, you can display the one that was output last.\nFor example, while displaying the standard output of make and the error output separately, you can switch the screen if there is an error.\nov --follow-all --exec -- make ",
    "description": "ov can execute commands and display the output.",
    "tags": [
      "ov",
      "exec"
    ],
    "title": "execute command",
    "uri": "/ov/exec/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "Output appended data and move it to the bottom line (like tail -f).\nov can perform operations such as search input without stopping follow-mode (also incremental search!).\ndocker run chentex/random-logger:latest 100 400 |ov --follow-mode ",
    "description": "How to use follow mode of ov",
    "tags": [
      "ov",
      "tail"
    ],
    "title": "How to use follow mode",
    "uri": "/ov/tail/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "ov can use a unit called section. Sections are blocks separated by section delimiters. The section delimiter line is displayed in the style of StyleSectionLine (background color green).\nThe section delimiter is optionally specified as a regular expression string at startup.\nov --section-delimiter \"^$\" If you want to set the section delimiter after startup, enter it in input mode with the section_delimiter key binding (alt + d).\nSection delimiter: ^$ If section delimiters are not required (blank lines, etc.), --section-start 1 can be used to display from the next line.\n--follow-section uses the section instead of the follow-mode line.\nSuitable for use with \\watch of psql.\n",
    "description": "How to use section of ov",
    "tags": [
      "ov",
      "section"
    ],
    "title": "How to use section",
    "uri": "/ov/section/index.html"
  },
  {
    "breadcrumb": "Top \u003e ov",
    "content": "Memory management Regular file ov is managed by dividing it into Chunks for each ChunkSize (10,000) lines. For example, a file with 73210 lines is divided into 7 chunks.\nThe first Chunk (Chunk0) is always loaded into memory. Chunk3 and Chunk4 must also be loaded into memory, as they may span two Chunks when displayed. Chunk1 and Chunk2 have been used before and are loaded into memory, but can be freed if they exceed their limits. For regular files, it is possible to save memory and speed by loading and freeing memory while seeking.\nNon-regular file Files that cannot be seek (pipes and compressed files) are also managed in chunk units, but once released, they cannot be loaded into memory, so load them into memory as much as possible. If there is a memory limit, read up to the memory limit and then pause reading.\nThen, for example, when you go to line 41230, Chunk1, Chunk2, and Chunk3 are freed and read ahead from where they are now.\nmemory limit The default memory limit for regular files is 100 (1 million lines). I don’t think you need to change much, but you can specify it with --memory-limit-file.\nov --memory-limit-file 10 large.log The default memory limit for non-regular files is -1 ( unlimited).\nIt is recommended to limit this according to memory. It is recommended to set MemoryLimit: 10000(or 1000) in ov.yaml.\nMemoryLimit: 10000You can also use options like --memory-limit 1000.\ncommand | ov --memory-limit 1000 Even with the memory limit option specified, large files can still use a lot of memory. Setting GOMEMLIMIT to run GC frequently will also suppress temporary memory increase.\nexport GOMEMLIMIT=400MiB ov --memory-limit-file 10 large.log ",
    "description": "Memory management of ov",
    "tags": [
      "ov",
      "memory"
    ],
    "title": "Memory management",
    "uri": "/ov/memory/index.html"
  },
  {
    "breadcrumb": "Top",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Git",
    "uri": "/tags/git/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Ov",
    "uri": "/tags/ov/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Ov",
    "uri": "/categories/ov/index.html"
  },
  {
    "breadcrumb": "Top",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Delta",
    "uri": "/tags/delta/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Bz2",
    "uri": "/tags/bz2/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Gz",
    "uri": "/tags/gz/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Log",
    "uri": "/tags/log/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Ltsv",
    "uri": "/tags/ltsv/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Lz4",
    "uri": "/tags/lz4/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Trdsql",
    "uri": "/tags/trdsql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Trdsql",
    "uri": "/categories/trdsql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Wildcard",
    "uri": "/tags/wildcard/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Xz",
    "uri": "/tags/xz/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Zstd",
    "uri": "/tags/zstd/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: 圧縮",
    "uri": "/tags/%E5%9C%A7%E7%B8%AE/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Pgcli",
    "uri": "/tags/pgcli/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: PostgreSQL",
    "uri": "/tags/postgresql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.13.0をリリースしました。 リリースのページから各バイナリがダウンロードできます。\nテーブル名の指定 -tオプションでテーブル名を指定できるようになりました。一番短い構文は以下のようになります。\ntrdsql -t test.csv 単純にフォーマット変換したいときに便利です。\ntrdsql -ojson -t test.csv これはSELECT * FROM test.csvと同じです。\nmacOSのM1バイナリを修正 macOSのM1(Arm64)バイナリを修正しました。Linuxからのクロスビルドで作成していたため、macOSでのビルドが動作しませんでした。 macOS環境のクロスビルドにしたため、macOSでのビルドが動作するようになりました。\nzigビルドのサポート ビルド環境の見直しによって、zigでのビルドが可能になりました。全体を置き換えようかと思いましたが、結局置き換えはしませんでした。 今回linux-old版のみzigでビルドしています。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.13.0",
    "uri": "/blog/trdsql_0130/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.32.1をリリースしました Terminal PAGER releases ov v0.32.1\n入力候補の修正 入力候補の表示がおかしかったのを修正しました。\n列数が不揃いのときにクラッシュする問題を修正 列数が不揃いのときにクラッシュする問題を修正しました。\n行数の更新に関する設定を追加 行数が多いファイルでは、行数が定期的に更新されますが、その際に画面がちらつくことがあります。 そのため、途中では行数の更新を行わないようにする設定を追加しました。\nPrompt: Normal: ProcessOfCount: falseで更新しないようになります。\n過去のバージョン v0.32.1 入力候補の修正等 v0.32.0 section-headerオプションを追加 v0.31.0 検索にsmartcaseオプションを追加 v0.30.0 すべてをメモリにロードしないように変更 v0.15.0 パフォーマンス、メモリ効率改善 v0.14.2 キーボード、マウスの改善 v0.14.1 column-delimiterに正規表現サポートを追加 v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.32.1",
    "uri": "/blog/ov_032_1/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.12.1をリリースしました。 リリースのページから各バイナリがダウンロードできます。\nCGOを使わないビルドに対応 CGOを使わないビルドに対応しました。trdsqlはgo-sqlite3がデフォルトで使用しているため、ビルドにCGOが必要でした。sqliteを使用することでCGOを使わないビルドを実現しています。\nCGOを使わないビルドは以下のようにビルドします。\nCGO_ENABLED=0 make CGOを使わないビルドにした場合はdriver名はsqliteに変更になります。また、sqliteがデフォルトになります。\nCGOを使わないビルドの場合は以下がエラーになります。\ntrdsql -driver sqlite3 \"SELECT 1;\" trdsqlのreleaseページにあるバイナリはCGOを使用するようにビルドされています。これは速度面でCGOを使用したほうが有利だからです。\ntrdsqlのパッケージ利用ソフト trdsqlのパッケージを利用したソフトである、psutilsql、mdtsqlはCGOを使わないビルドにして、バイナリをリリースしています。\nクロスビルドが簡単になったため、各OSのバイナリも用意しています。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.12.1",
    "uri": "/blog/trdsql_0121/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.12.0をリリースしました。 リリースのページから各バイナリがダウンロードできます。\nYAMLサポート YAML形式のファイルを読み込み、出力できるようになりました。\n読み込みはYAML, またはYMLの拡張子であれば自動判別させるか、-iyamlを指定します。\n- id: 1 name: Orange - id: 2 name: Melon - id: 3 name: Apple$ trdsql -oh \"SELECT id,name FROM test.yaml\" id,name 1,Orange 2,Melon 3,Apple 出力は-oyamlを指定します。\ntrdsql -oyaml \"SELECT * FROM KEN_ALL.CSV LIMIT 1\" - c1: 577 c2: 48 c3: 196608 c4: ホッカイドウ c5: サッポロシチュウオウク c6: イカニケイサイガナイバアイ c7: 北海道 c8: 札幌市中央区 c9: 以下に掲載がない場合 c10: 0 c11: 0 c12: 0 c13: 0 c14: 0 c15: 0YAMLの読み込みは内部的にはJSONに変換してから読み込んでいます。そのため階層構造のあるYAMLの値はJSONになります。\n- id: 1 name: Drolet attribute: color: burlywood country: Maldives - id: 2 name: Shelly attribute: color: plum country: Yemen - id: 3 name: Tuck attribute: color: antiquewhite country: Mayotte$ trdsql \"SELECT * FROM test2.yml\" 1,Drolet,\"{\"\"color\"\": \"\"burlywood\"\", \"\"country\"\": \"\"Maldives\"\"}\" 2,Shelly,\"{\"\"color\"\": \"\"plum\"\", \"\"country\"\": \"\"Yemen\"\"}\" 3,Tuck,\"{\"\"color\"\": \"\"antiquewhite\"\", \"\"country\"\": \"\"Mayotte\"\"}\" JSONで出力すると下の階層までJSONになります。\n$ trdsql -ojson \"SELECT * FROM test2.yml\" [ { \"id\": \"1\", \"name\": \"Drolet\", \"attribute\": { \"color\": \"burlywood\", \"country\": \"Maldives\" } }, { \"id\": \"2\", \"name\": \"Shelly\", \"attribute\": { \"color\": \"plum\", \"country\": \"Yemen\" } }, { \"id\": \"3\", \"name\": \"Tuck\", \"attribute\": { \"color\": \"antiquewhite\", \"country\": \"Mayotte\" } } ] 内部がJSONなのでJSONと同じくjq構文が使用可能です。\n$ trdsql \"SELECT * FROM test2.yml::.[].attribute.color\" burlywood plum antiquewhite markdown出力のときにエスケープ追加 markdown出力のときに|をエスケープするようにしました。 前は|があるときに自分で変換しておかないとHTML変換時に列がずれていました。\n$ trdsql -omd \"SELECT 'a','b', 'c|d'\" | ?column? | ?column? | ?column? | |----------|----------|----------| | a | b | c\\|d | ",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.12.0",
    "uri": "/blog/trdsql_0120/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.32.0をリリースしました Terminal PAGER releases ov v0.32.0\n起動時に検索する--pattern オプションを追加 --pattern は起動時に検索する文字列を指定することができます。 先頭から/検索文字列で検索する場合と同じです。\nlessの--patternオプション相当です。\n圧縮ファイルの伸長を行わない--skip-extractオプションを追加 --skip-extract は圧縮ファイルの伸長をしないオプションです。 ovでは先頭の数バイトから圧縮ファイルの判定を指定します。 そのため、パイプ等で1文字2文字しか渡されない場合は、必要なバイト数に達するまで表示されません。 --skip-extract を指定すると、圧縮ファイルの判定をおこなわないので即座に表示します。\nバッファの保存を追加 通常ファイルではないパイプ等の入力のときに現在のバッファを保存できるようになりました。 lessのsアクションと同じです。 デフォルトではS（大文字キー）で保存します。\nctrl+hにキー割り当てが可能になりました ctrl+hは端末によりbackspaceと区別できませんが、端末により動くが変わっており、押したキーを設定で割り当てることができない場合が多くありました。\nctrl+hはbackspaceを必ず同一にすることにより割り当て可能にしました。\nそのため ctrl+hとbackspaceとctrl+backspaceは区別せずにbackspaceになります。 Backspace2が別に割り当てられるような記述がありましたが、これは廃止しました。\nsection-headerオプションを追加 --section-header はセクションのヘッダーを表示するかどうかを指定するオプションです。\n例えば~/.gitconfigに以下のように設定するとgit diffではファイル単位でセクションとして扱い、スクロールしてもファイル名がヘッダーとして表示されるようになります。\n[pager] diff = ov -F --section-delimiter \"^diff\" --section-header log = ov -F --section-delimiter \"^commit\" --section-header 過去のバージョン v0.32.0 section-headerオプションを追加 v0.31.0 検索にsmartcaseオプションを追加 v0.30.0 すべてをメモリにロードしないように変更 v0.15.0 パフォーマンス、メモリ効率改善 v0.14.2 キーボード、マウスの改善 v0.14.1 column-delimiterに正規表現サポートを追加 v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.32.0",
    "uri": "/blog/ov_032_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Psql",
    "uri": "/tags/psql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.31.0をリリースしました Terminal PAGER releases ov v0.31.0\n検索にsmartcaseオプションを追加 大文字・小文字を区別するかどうかのオプションに加えてsmartcaseを追加しました。 smartcaseでは最初の文字が大文字だった場合は大文字小文字を区別します。それ以外は区別しません。\n列のカーソル移動を改善 列のカーソル移動を改善しました。驚きが少ないような動きになりました。\n列のカーソル移動をサイクル対応にしました。左右の端までいくと反対側の端に移動します。 横へのカーソル移動のとき画面からはみ出すような列では次の列に移動せずに列の残りの内容を表示するように移動します。 列モードを終了したり、再度列モードにしたときにカーソルが現在の表示を尊重して表示するようになりました。 カーソルが画面外にあって、いきなり飛ぶような動きがなくなりました。 jump-targetにsectionを指定できるようにした デフォルトでは、検索すると一番上の対象行が表示されますが、jump-targetを指定するとその分ずらして表示します。 jump-targetには、数字と「.」または「%」による割合指定ができました。 例えば --jump-target 1 であれば1行下にずらします。 --jump-target 50% または --jump-target .5 であれば、画面の半分の位置にずらします。\nこれに加えて文字列で sectionが指定可能になりました。--jump-target section とすると、 検索結果がセクションの先頭から表示される場合はセクションの先頭から表示しつつ、検索がヒットした行を表示します。\n例えば~/.gitconfigに以下のように設定するとgit logではコミット単位をサクションとして表示して、検索するとコミットの先頭から表示できるようになります。\n[pager] diff = ov -F --section-delimiter \"^diff\" --jump-target \"section\" log = ov -F --section-delimiter \"^commit\" --jump-target \"section\" 過去のバージョン v0.31.0 検索にsmartcaseオプションを追加 v0.30.0 すべてをメモリにロードしないように変更 v0.15.0 パフォーマンス、メモリ効率改善 v0.14.2 キーボード、マウスの改善 v0.14.1 column-delimiterに正規表現サポートを追加 v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.31.0",
    "uri": "/blog/ov_031_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Memory",
    "uri": "/tags/memory/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Guesswidth",
    "uri": "/tags/guesswidth/index.html"
  },
  {
    "breadcrumb": "Top \u003e trdsql",
    "content": "trdsql can receive data from Standard input, but the output such as PS interpreted a format that is not originally a space separation, so the column.The interpretation was not accurate.\ntrdsql 0.11.1 uses the -iwidth option to handle a row of a fixed length as a table. With this option, you can interpret output like ps more accurately.\nps | trdsql -omd -iwidth \"SELECT * FROM - \" | PID | TTY | TIME | CMD | |--------|-------|----------|--------| | 237958 | pts/2 | 00:00:02 | zsh | | 369132 | pts/2 | 00:00:00 | ps | | 369133 | pts/2 | 00:00:00 | trdsql |You can interpret it when there is a row name header and the header is output according to the width of the value later.\nOutputs such as ps, docker ps, docker images, df, dpkg -l, etc. are confirmed.\ndocker ps -a|trdsql -ojson -iwidth \"SELECT * FROM -\" [ { \"CONTAINER ID\": \"52b096a5473b\", \"IMAGE\": \"69b11229fb45\", \"COMMAND\": \"\\\"/bin/sh -c 'set -ex…\\\"\", \"CREATED\": \"17 months ago\", \"STATUS\": \"Exited (2) 17 months ago\", \"PORTS\": \"\", \"NAMES\": \"admiring_mahavira\" }, { \"CONTAINER ID\": \"5aa93ac03306\", \"IMAGE\": \"chentex/random-logger:latest\", \"COMMAND\": \"\\\"/entrypoint.sh 100 …\\\"\", \"CREATED\": \"3 months ago\", \"STATUS\": \"Exited (137) 3 months ago\", \"PORTS\": \"\", \"NAMES\": \"admiring_poitras\" }, { \"CONTAINER ID\": \"ac978c968bd3\", \"IMAGE\": \"chentex/random-logger:latest\", \"COMMAND\": \"\\\"/entrypoint.sh 100 …\\\"\", \"CREATED\": \"14 months ago\", \"STATUS\": \"Exited (130) 14 months ago\", \"PORTS\": \"\", \"NAMES\": \"adoring_euler\" } ]",
    "description": "",
    "tags": [
      "trdsql",
      "guesswidth"
    ],
    "title": "trdsql For fixed width",
    "uri": "/trdsql/36_guesswidth/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Cut",
    "uri": "/tags/cut/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Sort",
    "uri": "/tags/sort/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Sql",
    "uri": "/tags/sql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Less",
    "uri": "/tags/less/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: More",
    "uri": "/tags/more/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Pager",
    "uri": "/tags/pager/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Pspg",
    "uri": "/tags/pspg/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Psql",
    "uri": "/categories/psql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "psqlのPAGERを設定する PAGERをoff/onにする psqlでは pset値により、PAGERをon/off/alwaysにすることができます。alwaysにすると、psql起動時に出力が画面に収まっても常にPAGERが起動します。\nオプションで一時的にPAGERをoffにするには以下のようにします（以降offの部分はonやalwaysが指定できる）。\npsql -P pager=off .psqlrcファイルに設定すれば以後ずっとPAGERをoffになります。\n\\pset pager off起動後にPAGERをoffにする（psqlで接続後に実行する）には\\psetコマンドを使用します。\n# \\pset pager off\\pset pagerを引数なしで実行するとトグルになり、実行するとon/offが切り替わります。\n# \\pset pager Pager usage is off. # \\pset pager Pager is used for long output.PostgreSQL 15.0からの追加機能 PostgreSQL 15.0からは、pager_min_linesが追加され、画面に収まらない場合に何行以上だったらPAGERを起動するか行数を指定できます。デフォルトは0で、画面に収まらない場合にPAGERを起動します（画面に収まる行数を指定しても無効になる）。 pager_min_linesよりもpset pager=alwaysの方が優先されます。 ターミナルのスクロール等でさかのぼれない場合のみPAGERを起動したい場合に便利です。\npsql -P pager_min_lines=10000 pset値なので、.psqlrcや起動後に実行することもできます。\n\\pset pager_min_lines 10000# \\pset pager_min_lines 10000psetの値は、\\psetを実行すると表示されます。pagerの値はoff=0, on=1, always=2になります。\n# \\pset border 1 columns 0 csv_fieldsep ',' expanded off fieldsep '|' fieldsep_zero off footer on format aligned linestyle ascii null '' numericlocale off pager 1 pager_min_lines 10000 recordsep '\\n' recordsep_zero off tableattr title tuples_only off unicode_border_linestyle single unicode_column_linestyle single unicode_header_linestyle singlePAGERを変更する psqlでは、PSQL_PAGER又はPAGER環境変数により、PAGERを変更することができます。PAGERは汎用的な環境変数なので、psql以外のコマンドでも使用されるのでpsqlのみに適用したい場合は、PSQL_PAGERを使用します。 PSQL_PAGERとPAGER環境変数がセットされていない場合は、more又はlessがデフォルトのPAGERになる。lessがある場合は、lessが優先されます。\nPSQL_PAGER=less psql .psqlrcファイルの中で環境変数をセットできるので、以下の設定を入れると恒久的にPAGERを変更できます。\n\\setenv PSQL_PAGER lessPAGERの種類 psql向きのPAGERは、以下のようなものがあります。\nless pspg ov moreは、多くの環境で入っているが、psqlのPAGERとしては使いにくいのでおすすめしません。\nless lessは古くからあるPAGERで、大抵はディストリビューションのパッケージになっているので簡単にインストールできます。 lessは、安定していて、これまで開発にそれほど変化はありませんでしたが、最近になってヘッダーオプションが追加されました。\nバージョン600で、lessのヘッダーを表示するオプションが追加されたので、それ以降のバージョンであれば、以下のように設定するとpsqlのヘッダー（列名）の表示を固定できます。\nPSQL_PAGER=\"less --header 2\" psql --header 2は、ヘッダーを2行固定表示するオプションです。--headerオプションを使用したときには、折返し表示をしないモードになります（-S相当）。\nまた、--header 2,14のように、2番目の引数を渡すと2行のヘッダーの固定表示に加えて、横スクロールするときに左側を幅14まで固定表示してスクロールできます。ただ、この左側の固定はテーブルによって列の幅は変わるので、オプションで渡すのは望ましくありません。 lessで表示しているときに、--headerと入力すると入力モードに切り替わるため、そのときに文字数を入力すると、その文字数で固定表示されます。\nHeader lines: 2,14ただ幅を文字数で指定する必要があるため、使いやすいとは言い難いです。\npspg pspgはpsql用に作られたPAGERで、テーブルを表示するのに便利な機能があります。psqlの出力をアスキーテーブルの形式に変換して、列名がヘッダーとして表示されます。また、列を数字キー入力で簡単に固定表示できる（デフォルトで1が指定されているので、一番左の列が固定表示される）。\npspgはテーマがたくさん用意されていて変更できます。pspgのテーマは、pspg --themesで確認できます。\nPSQL_PAGER=pspg psql ov ovは拙作の汎用PAGERでpsqlでの使用を想定して開発を開始しましたが、他の用途でも使えるようにオプションやキーにより必要な機能が切り替えられるようにしたため、汎用でありながらpsqlに向いた表示ができます。\nPSQL_PAGER='ov -C -d \"|\" -H1 --column-mode --column-rainbow' psql ヘッダー行の行数を指定(’-H1’)して、ヘッダー行を固定表示しています。ヘッダー行に対してスタイルを指定できるため、区切り文字(’-’)をヘッダーとして扱わなくても済むために1行のみにしています。 またColumn Modeを区切り文字(’-d “|”’)とともに指定することで、列の選択ハイライト表示が可能です。さらに--column-rainbowを追加すると列をそれぞれ別の色で表示できます。\n--column-modeがあるためヘッダー行と折り返す表示の両方を同時に使用することができます。\novで区切り文字で列を認識した場合は、縦に揃っていなくてもよいため、以下のように\\aでalignを切り替えても問題ありません。\n詳細はovのpsqlのページを参照して下さい。\nPSQL_WATCH_PAGER PostgreSQL 15.0からはPSQL_PAGERとは別にPSQL_WATCH_PAGERが追加されました。\npsqlには\\watchコマンドがあり、この前に実行したSQLを定期的に実行して結果を表示することができます。このときの表示にはPSQL_PAGERは使われません。通常PAGERは終了しないと次のSQLの結果を受け取れないため、\\watchの自動で実行は相性が悪いためです。\nただPAGER側で終了しなくても\\watchの結果を受け付け続けることができれば、\\watchの結果をPAGERで表示できます。そのためにPSQL_WATCH_PAGERが追加されました。\nPSQL_WATCH_PAGERにはpspgとovが指定できます。\npspgのWATCH対応 pspgをPSQL_WATCH_PAGERに指定するときに--streamオプションを付けます。\nPSQL_WATCH_PAGER='pspg --stream' psql SELECT * FROM pg_stat_activity; \\watch 1\\watchにより pg_stat_activityの結果が1秒ごとに更新されます。\novのWATCH対応 ovをPSQL_WATCH_PAGERに指定するときに--follow-sectionオプションと--section-delimiter \"^$\"を付けます。\n--follow-sectionはovのオプションで、--section-delimiterで指定した区切り文字で区切られたセクションでフォローモードを有効にします。 --section-delimiterはovのオプションで、^$は空行を区切り文字として指定しています。\nつまり空行がある位置までをスクロールして表示し、その後は空行がある位置までスクロールして表示を繰り返します。\nPSQL_WATCH_PAGER='ov -w=f --follow-section --section-delimiter \"^$\" -d \"|\" --column-mode --column-rainbow' psql さらに section-start(alt+s) でセクションの開始位置を指定することができます。セクションの開始位置を指定すると、その位置からスクロールして表示を繰り返します。\n",
    "description": "",
    "tags": [
      "psql",
      "pager",
      "less",
      "more",
      "pspg",
      "ov",
      "postgresql"
    ],
    "title": "psqlのPAGERを設定する",
    "uri": "/blog/psql-pager/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Csv2json",
    "uri": "/tags/csv2json/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Csv2ltsv",
    "uri": "/tags/csv2ltsv/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Json2csv",
    "uri": "/tags/json2csv/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Ltsv2csv",
    "uri": "/tags/ltsv2csv/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.30.0をリリースしました Terminal PAGER releases ov v0.30.0\nメモリ管理の変更 v0.15.0までのメモリ管理を変更して、ファイルのすべてをメモリにロードするのを止め、必要なChunkをメモリにロードするように変更しました。\nov v0.15.0までは、行数を数えるのにファイルをすべて読み込んでいましたが、この方法では、ファイルサイズが大きくなるとメモリを大量に消費してしまいます。 そこで、最初の起動時に最初のChunk分（1万行）はメモリにロードしますが、それ以降は行数を数えてreadの位置をChunk毎に記録しておくだけにしました。 Chunkの移動が発生した場合は、そのChunkをメモリにロードします。そしてメモリ制限を超えた場合は、メモリにロードされているChunkを解放します。 通常ファイルではseekを使っているので、Chunkの移動時にディスクアクセスが発生します。\nseekできないファイルでは、Chunkを解放してしまうと再ロードできないため、デフォルトではすべてのChunkをメモリにロードします。 メモリ制限をした場合は、メモリ制限を超えないまでChunkをロードし、readを一時停止します。そしてChunkを移動したときに、現在のChunkより前のChunkを解放して、停止していたreadを再開します。\nこれにより、メモリを大量に消費することなく、大きなファイルを扱うことができるようになりました。 メモリの制限は--memory-limitと--memory-limit-fileオプションで指定できます。\nfollowの改善 新しく--follow-nameオプションを追加しました。今まではファイルディスクリプタを使っていたので、ファイル名が変わるとfollowができなくなっていました。 --follow-nameオプションを指定すると、ファイル名が変わってもfollowができるようになりました。\nまた、改行で終わらないファイルのfollowができない問題を修正しました。改行で終わっていないファイルに追加された場合は、新しい行ではなくすでに表示されている行の後ろに追加されるようになりました。 これまでは、改行で終わっていないファイルに追加された場合は、新しい行として表示されていたため、再度開き直すと表示が違っていました。\ncolumn-widthを追加 --column-widthオプションを追加しました。--column-widthオプションを指定すると、指定した幅で表示します。 guesswidthを使って、ヘッダーの文字幅を推測しています。 これによりps出力等をパイプで受けてそれぞれの列をわかりやすく表示できるようになりました。\n過去のバージョン v0.30.0 すべてをメモリにロードしないように変更 v0.15.0 パフォーマンス、メモリ効率改善 v0.14.2 キーボード、マウスの改善 v0.14.1 column-delimiterに正規表現サポートを追加 v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.30.0",
    "uri": "/blog/ov_030_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Ps",
    "uri": "/tags/ps/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: English",
    "uri": "/tags/english/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "For a long time now, Unix-like commands and CLI have been outputting width-aligned output. ls, ps, df, etc…\nSuch output can be produced by a printf format specification.\nIf this format specification is known, it can be read by scanf, but it is not easy to recognize and read columns from “just the output”.\nIf multiple spaces are considered as delimiters, it is possible to divide the output into columns, but headers and values may cause unnecessary division. We have created a library/tool to guess the column width so that this can be read by humans.\nguesswidth Made by Go.\nIt is difficult to read perfectly, but I think it gives better results than space-separated regular expressions.\nThe main thing that can be read is if there is a header row and the width of the header column represents the width of the values in the rows that follow.\nThis is the case for ps and df. In ls, there is no header row, so the column delimiters are ambiguous.\nIn ps, “PID”, “TTY”, “TIME”, and “CMD” represent the lower values, and can be divided into four parts:\nIn this example, multiple spaces can be split, but if the header or value contains spaces, it cannot be split correctly. guesswidth supports such formats.\nTo use guesswidth, simply pass in the pipe |. By default, | is inserted as a delimiter.\nps |guesswidth PID| TTY | TIME|CMD 1145448| pts/2 | 00:00:00|zsh 1158532| pts/2 | 00:00:00|ps You can also separate them as CSV with “,” separators; in CSV, extra spaces are stripped.\nps |guesswidth csv PID,TTY,TIME,CMD 1145448,pts/2,00:00:00,zsh 1158532,pts/2,00:00:00,ps Support for ps, df, docker ps and many other outputs. The ls has no header, so it is split based on the contents of the first line. (The first line is a total display and must be removed from the criteria.)\nls -l|guesswidth --header 2 合計 7900|||||||| -rw-r--r--| 1| noborus| noborus| 1078| Mar| 14| 05:48|LICENSE -rw-r--r--| 1| noborus| noborus| 526| Mar| 16| 05:23|Makefile -rw-r--r--| 1| noborus| noborus| 1751| Mar| 21| 16:49|README.md The modern ls alternative, exa, can add header lines, so it’s more GUESSWIDTH oriented.\n$ exa -lh|guesswidth Permissions| Size| User | Date Modified|Name drwxr-xr-x | -| noborus| 14 Mar 16:30 |cmd drwxr-xr-x | -| noborus| 22 Mar 09:02 |dist drwxr-xr-x | -| noborus| 19 Mar 12:58 |docs .rw-r--r-- | 3.0k| noborus| 21 Mar 16:39 |example_test.go .rw-r--r-- | 285| noborus| 4 Apr 14:22 |go.mod .rw-r--r-- | 1.2k| noborus| 4 Apr 14:22 |go.sum How do you do that? Guess where the split is? The division method is not difficult, but it is a bit annoying, so I will explain it.\nFirst, a reference line (header line) is determined. Without this base line, some values will be incorrectly split there (as in the ls example) because some formats have a space in the same position.\nFrom that reference line, we create candidates for the delimiter position. Simply convert to 1 (candidate) if it is a space, otherwise convert to 0 (not a delimiter position).\nFor simplicity, take ps as an example.\nPID TTY TIME CMD 11110001000111111111100001000Next, the values are candidates for spaces as well, but exclude positions that are not candidates in the header and count up.\nValue 1st line\n1145448 pts/2 00:00:00 zsh 11110002000112222111100002000Value 2nd line\n1158532 pts/2 00:00:00 ps 11110003000113333111100003000The first and last spaces are omitted due to the nature of the search for delimiters. The largest number in the sequence of 0 (not a delimiter) numbers is the most likely candidate for a delimiter position.If we consider that position as a delimiter, we can guess the delimiter position.\nIf there is a sequence of even larger numbers in the same point, it is not possible to make a judgment, but due to the characteristics of printf, the numbers do not extend to the left but to the right, so the rightmost number is guessed as the delimiter position.\nIf we leave the numbers only at the delimiter position, we get the following.\n11110003000113333111100003000 ↓ 3 1133331111 3 ↓ 3 3 3The accuracy is increased by reading as many lines of values as possible, not just the header lines, before determining the value.\nSplitting process If the position of the division can be guessed, that is not the end of the process. As mentioned above, although the format outputs the data with a specified width, it is often the case that the data does not fit into the specified width and extends beyond the specified width.\nFor example, if you use the option ps, you can display more information, but there are many items that will be overflowed.\n$ ps aux USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND root 1 0.0 0.0 169004 11464 ? Ss Mar27 1:04 /sbin/init sp root 2 0.0 0.0 0 0 ? S Mar27 0:00 [kthreadd] root 3 0.0 0.0 0 0 ? I\u003c Mar27 0:00 [rcu_gp] and you think the vertical position is nicely displayed,\nnoborus 619043 0.0 0.0 38992 28968 pts/4 Ss+ Apr04 0:02 zsh noborus 1061523 2.2 1.8 34556112 591016 ? SLl Apr06 61:54 /opt/google/chrome/chrome and VSZ and RSS are overhanging memory-intensive processes like chrome processes.\nSo if the delimiter position is not a space, many will shift to the right and look for a space to compensate for the delimiter position (in fact, they will even try to shift to the left to see if it fits, in case they guessed the delimiter position wrong and shifted to the right).\nOther considerations Although the header line is the standard, spaces are sometimes used in header line headings.\nFor example, in df the last Mounted on is a single column.\nFilesystem 1K-blocks Used Available Use% Mounted onTherefore, if there is a space only in the header line position and no space in the value below it, the delimiter position is prevented by setting the threshold to 2 or more, because if the value is an array of numbers, it will not be counted up and will remain at 1.\nlibrary The guesswidth is an independent version originally created for use in another tool.\nI also incorporated it into my trdsql, so you can use -iwidth to output in various formats as follows.\nps aux|trdsql -iwidth -ojson \"SELECT * FROM - WHERE \\\"COMMAND\\\" = 'ps aux'\" [ { \"USER\": \"noborus\", \"PID\": \"1166430\", \"%CPU\": \"0.0\", \"%MEM\": \"0.0\", \"VSZ\": \"13716\", \"RSS\": \"3520\", \"TTY\": \"pts/2\", \"STAT\": \"R+\", \"START\": \"17:56\", \"TIME\": \"0:00\", \"COMMAND\": \"ps aux\" } ]Also, this is actually the real deal, but I have also incorporated it into my pager ov (v0.30.0 or later), and by combining the options, you can display the following.\nps aux| ov ",
    "description": "",
    "tags": [
      "guesswidth",
      "english"
    ],
    "title": "Guess the width of the width-specified format",
    "uri": "/blog/guesswidth/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Guesswidth",
    "uri": "/categories/guesswidth/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.11.1をリリースしました。 リリースのページから各バイナリがダウンロードできます。\nguesswidthを使用して、幅が固定長の列をテーブルとして扱えるようにしました。\nこれまではpsの出力等をスペース（複数の連続スペースがあっても1つとみなす）区切りで、CSVとして解釈するといったことをしてきましたが、スペースの規則が決まっているわけではなく不正確でした。\n完璧ではありませんが、幅を推測することでより良く解釈することが可能です。\nps|trdsql -iwidth \"SELECT * FROM -\" 1067693,pts/0,00:00:08,zsh 1123441,pts/0,00:00:00,ps 1123442,pts/0,00:00:00,trdsql 例えば、psの出力をjsonにしたり、docker psの出力をアスキーテーブルで表示できたりします。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.11.1",
    "uri": "/blog/trdsql_0111/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.15.0をリリースしました Terminal PAGER releases ov v0.15.0\nメモリ管理の方法を見直して、Chunk単位（現在のところ1万行）で管理することにより、大きなファイルの読み込み速度が改善しました。またメモリの使用量も少なくなっています。\novはこれまでのところ、ファイルの内容をすべてメモリにロードしていましたが、今回はすべてインメモリで動作する最後（バグフィックス版は出るかもしれませんが）のバージョンになります。\n行管理がChunk単位にすることで、Chunk単位でメモリへのロードとアンロードが可能になるため、通常のファイルではすべてメモリに載っている必要がなくなります。\nただ、アンロード、再ロード、パイプの場合の戦略の違い等々、変更が多岐に渡るため、次のバージョンの変更が大きくなります。\n過去のバージョン v0.15.0 パフォーマンス、メモリ効率改善 v0.14.2 キーボード、マウスの改善 v0.14.1 column-delimiterに正規表現サポートを追加 v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.15.0",
    "uri": "/blog/ov_015_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.14.2をリリースしました Terminal PAGER releases ov v0.14.2\nhyperlinkの改善 ls --hyperlink に対応しました。ls --hyperlinkはちょっと文法が異なっていたため、追加で対応する必要がありました。\nls --hyperlink|ov キーボード、マウスの改善 キーボードでctrl+cコピー、ctrl+vペーストに対応しました。コピーはマウスで選択する必要があるためそれほど使用しませんが、ペーストはキーボードで出来た方が便利でした。\nshift+wheelで横スクロールに対応しました。列モードでは、列の選択がマウスのwheelで可能になります。\nまた、キーボードでも shift+HOME で一番左に移動、shift+Endで一番右に移動できるようにしました。\n過去のバージョン v0.14.2 キーボード、マウスの改善 v0.14.1 column-delimiterに正規表現サポートを追加 v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.14.2",
    "uri": "/blog/ov_014_2/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Top",
    "uri": "/tags/top/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.14.1をリリースしました Terminal PAGER releases ov v0.14.1\nColumn Delimiterに正規表現も指定可能になりました 一番多く使われると思うのが、コマンドの出力で縦に揃えるためにスペース調整している場合に対応するためで、正規表現で複数の連続するスペースを指定する場合です。 --column-delimiter \"/\\s+/\"のように指定できます。\nps aux | ov -H1 --column-delimiter \"/\\s+/\" --column-rainbow --column-mode OSC-8 hyperlinkに対応しました Hyperlinks in terminal emulatorsにあるHyperLinkに対応しました。\nエスケープシーケンスでリンクにするもので、対応しているターミナルエミュレーターで動作します。\nprint '\\e]8;;http://example.com\\e\\\\This is a link\\e]8;;\\e\\\\'|ov とovで表示中でもリンクが機能します。\n過去のバージョン v0.14.1 column-delimiterに正規表現サポートを追加 v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.14.1",
    "uri": "/blog/ov_014_1/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.14.0をリリースしました Terminal PAGER releases ov v0.14.0\nXDG_CONFIG_HOME に対応しました 今までcobra/vipperを普通に使っていたので、設定の場所は~/.ov.yamlでしたが、XDG_CONFIG_HOMEに対応したので、$XDG_CONFIG_HOME/ov/config.yamlの方が優先されるようになりました。XDG_CONFIG_HOMEが設定していなくても~/.config/ov/config.yamlを見るようになります。\nov –config で指定したパス $XDG_CONFIG_HOME/ov/config.yaml ~/.config/ov/config.yaml ~/.ov.yaml の順で参照します。\nHacker Newsに投稿 Hacker Newsに投稿したのでGitHUb Starが１日で200→500になりました。その後も順調に増えています。\n過去のバージョン v0.14.0 XDG_CONFIG_HOMEに対応 v0.13.0 view-modeの修正 v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.14.0",
    "uri": "/blog/ov_014_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.12.0をリリースしました Terminal PAGER releases ov v0.12.0\nmulticolor機能を追加 multicolor機能を追加しました。これは複数の語に対して、それぞれ色（スタイル）を指定できるものです。 コードハイライト等の機能を持ったものは自動で色分けして色付けしますが、自分で色を付けたい文字列を指定します。\nデフォルトで[.]キーで文字列を入力できます。\nまた、この機能を使うためには、元のハイライト表示が邪魔になる場合があるので、元の装飾を無効にする--plainオプションも追加しています。起動後もデフォルトで[ctrl+e]で元の装飾を無効／有効を切り替えられます。\njump-target機能を追加 jump-target機能を追加しました。lessの--jump-targetに相当します。通常検索すると1番上の行に該当行を表示するように移動しますが、この行をjump-targetで指定した行に変更します。1であれば、2番目の行に表示するように移動します。\nlessでは.5のようにドットで始まると割合指定が可能（これは50%として画面の真ん中の行を指定）ですが、これにも対応しています。さらに50%のように後ろに%を付ける指定も可能です。\nマイナス指定は画面の下から数えた行数指定になります。 デフォルトで[j]キーで文字列を入力できます。\n過去のバージョン v0.12.0 multicolor, jump-targetの追加 v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.12.0",
    "uri": "/blog/ov_012_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "きっかけ 現在のバージョンのPostgreSQLではSELECT ;というSQL文を実行してもエラーになりません。 試してみると(1 row)と返ってきたので、あれ？なんで？となりました。\nこれは、列数が0なんですね。PostgreSQLは列数が0のテーブルが作れるので、それに合わせているようです。\nCREATE empty();\n— Tatsuo Ishii (@tatsuo_ishii) July 13, 2022 列数が0という指摘を受けて、一応0列があることを理解していたつもりだったのですけど、 その仕様を勘違いしていたことに気づきました。\nテーブルを省略したSELECTの扱い 全部のSQL実装では無いですが、SQLのSELECTはFROM句がなくても動作する実装が多いです。 psqlで実行すると以下のようになります。\nSELECT '1'; ?column? ---------- 1 (1 row)のようにすれば文字列1が返ってきます。列名は無いので?column?で表されていますが、1行1列のテーブルと同じ扱いになります。\nSELECT ;はこの流れで行数が1で、列数が0のテーブルということになります。\npsqlでは実行すると以下のように行が（改行も含めて）表示されないまま 1 row と表示されるのでちょっと変な感じがしたのですが、これはpsql側でどう表示するかの問題であって、1行0列のテーブルと同じ扱いになっています。\nSELECT ; -- (1 row)なにも指定していないので、0行0列になるかと勘違いしてましたが、1行0列の方が正しいとわかります。\nPostgreSQLは0列のテーブルが作れる 前述の石井さんから指摘にあるように最近のPostgreSQLでは0列のテーブルが作成できるようになっています。\nCREATE TABLE empty ();元からSQLでは行をINSERTしなければ0行のテーブルになるので、0列のテーブルを作っただけだと0列0行のテーブルになります。\nSELECT * FROM empty; -- (0 rows)psqlの表示では0列の場合(1 row)と(0 rows)の表示でしか区別出来ないですが、0行と1行でちゃんと違いがあって整合が取れている動作になっています。\n0列のテーブル操作 前は0列のSQLが許可されないところが多かったのですが、現在進行形で0列を許可するように修正されているので、前はエラーになったものが通るようになっていたり、これから通るようになったりする可能性があります。\nINSERT 0列のテーブルにINSERTしようとすると素直にできませんでした。\nINSERT INTO empty () VALUES (); ERROR: 42601: syntax error at or near \")\"SELECT 列数が0のテーブルだけでなく、列数が1つ以上のテーブルであってもSELECT FROM oneで列数が0で返すことができます。 これにより列数が0で、複数行のテーブルを表現できます。\n\\d one Table \"public.one\" Column | Type | Collation | Nullable | Default --------+---------+-----------+----------+--------- i | integer | | | SELECT FROM one; -- (2 rows)INSERT INTO SELECT ということはINSERT INTO table SELECTならINSERTが可能になります。\nINSERT INTO empty SELECT FROM one; INSERT 0 2INSERT出来てます。\nSELECT * FROM empty; -- (2 rows)行数が0のときとは明確に区別されます。\nINSERT INTO empty SELECT FROM one WHERE false; INSERT 0 0行数0でもSELECT i FROMにしてしまうとちゃんとエラーになります。\nINSERT INTO empty SELECT i FROM one WHERE false; ERROR: 42601: INSERT has more expressions than target columns LINE 1: INSERT INTO empty SELECT i FROM one WHERE false; ^ LOCATION: transformInsertRow, analyze.c:936",
    "description": "",
    "tags": [
      "sql",
      "postgresql"
    ],
    "title": "PostgreSQLで0列の扱い",
    "uri": "/blog/column0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Sql",
    "uri": "/categories/sql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Jq",
    "uri": "/tags/jq/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Json",
    "uri": "/tags/json/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "これまでtdsqlが対象とするJSONはフラットなJSONでした。そのためSQLの対象となるのはトップレベルのオブジェクトでした。\n[ {\"age\": \"26\", \"name\": \"Tanaka\"}, {\"age\": \"32\", \"name\": \"Suzuki\"} ]JSONは階層を深くすることができるので、さらに下の階層をSQLの対象としたい場合がありました。 SQLの関数を使用して、アクセスすることも出来ますが、少し面倒でした。\n{ \"list\": [ {\"age\": \"26\", \"name\": \"Tanaka\"}, {\"age\": \"32\", \"name\": \"Suzuki\"} ] }tdsqlではJSONに対し、まずjqの構文を使用して処理し、その結果に対してSQLを実行できます。 jqの構文はファイル名の後に\"::“を付け、その後に書きます。 jqの構文なので、主に”.“ドットではじまり、中の値にアクセスします。\n（jsonを対象とすると配列全体を１つの列と解釈してしまう）。\ntrdsql \"SELECT * FROM example0-s.json \"[{\"\"age\"\":\"\"26\"\",\"\"name\"\":\"\"Tanaka\"\"},{\"\"age\"\":\"\"32\"\",\"\"name\"\":\"\"Suzuki\"\"}]\" （listをテーブルとして解釈して、中のオブジェクトを列にする）。\ntrdsql \"SELECT * FROM example0-s.json::.list 26,Tanaka 32,Suzuki 深い階層にアクセスしたいときは、jqの構文では .list.menu.itemのようにドットで繋いでいけば簡単にアクセスすることができます。 階層途中に配列があってもjqの構文（[]等が含まれる場合は「\"」で括る等してください）が書ければアクセスすることができます。\ntrdsql \"SELECT * FROM example0-s.json::\\\".list[1].name\\\"\" 複雑な集計をjqで書くのは難しいため、対象をテーブル化することでSQLで集計するといったことができます。 また、CSVや他の形式に変換するのもtrdsqlでは簡単です。\n",
    "description": "",
    "tags": [
      "trdsql",
      "jq",
      "json"
    ],
    "title": "trdsql jq構文",
    "uri": "/blog/35_jq/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Bat",
    "uri": "/tags/bat/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.11.1をリリースしました Terminal PAGER releases ov v0.11.1\n設定名の修正 セクションの区切り文字を入力するモードに切り替える機能で、全体をsection_delimiterに変更してからリリースしたところ、設定の項目がsection_modeのままのところがあったのを修正しました。\nまた、ov.yamlとov-less.yamlにタブが含まれていてインデントが合っておらず、設定が効かなくなっていました。 さらに設定ファイルの読み込みエラーが捕捉されておらず、単にこれらのファイルを使用すると設定が反映されない状態になっていました。\n設定がエラーとなった場合はエラーで終了するように変更して、また雛形のyamlファイルのテストも追加しました。\n過去のバージョン v0.11.1 設定名の微修正 v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.11.1",
    "uri": "/blog/ov_011_1/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Exec",
    "uri": "/tags/exec/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Tail",
    "uri": "/tags/tail/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Section",
    "uri": "/tags/section/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Man",
    "uri": "/tags/man/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Markdown",
    "uri": "/tags/markdown/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Mycli",
    "uri": "/tags/mycli/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: MySQL",
    "uri": "/tags/mysql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Procs",
    "uri": "/tags/procs/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Watch",
    "uri": "/tags/watch/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.11.0をリリースしました Terminal PAGER releases ov v0.11.0\nセクションの概念を追加 対象の文書を--section-delimiterで区切り文字を指定することにより、セクションとして扱えるようになりました。\n--section-delimiterの区切り文字は正規表現で指定できます。改行は含まれませんので、^$は空行を指定したことになります。 その場合空行毎に違うセクションになります。\nページャーは通常、内容に関係なく画面サイズにより次のページの表示を決めていますが、セクションを利用することにより意味のある単位で移動できます。\nデフォルトでは、次のセクションに移動するのは[スペース]キー、前のセクションに移動するのは[^]キーです。最後のセクションに移動は[9]キーです。\n空行を指定した場合は、セクション移動時に最初の行が空行になってしまいます。これを調整するために--section-startも追加しました。--section-start 1を指定することにより、--section-delimiterの次の行から表示できます。\n起動オプションだけでなく、起動後も--section-delimiterは[alt+d]、--section-startは[alt+s]で指定できます。\nfollow-sectionを追加 --follow-sectionオプションを追加しました。section-delimiterで指定した区切り文字単位で、内容が更新されたときに最後のセクションを表示します。 follow-sectionを利用することにより、PostgreSQL version 15で追加される psqlのwatchのページャー（PSQL_WATCH_PAGER）として使用できるようになります。\nPSQL_WATCH_PAGER 'ov --follow-section --section-delimiter \"^$\"' Watchは追記するように変更 --watchは指定した時間毎にファイルを再読込していましたが、前の内容を消さずに再読込をした内容を追記するように変更しました。 このときEOFに到達するとEOFを’\\f’に置き換えて追記します。\nさらにWatchモードは自動で’\\f’をsection-delimiterとして、最終セクションを表示するようになりました。\nつまり、--watchで最後に実行された内容が表示され続けるのは変わりませんが、Watchモードを止めて上にスクロールすると履歴が見られます。\nWatchモードはファイルの定期再読込に加えてsection-delimiterとfollow-sectionを自動で設定したモードです。\n過去のバージョン v0.11.0 sectionの概念を追加 v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.11.0",
    "uri": "/blog/ov_011_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "手っ取り遅くSQLを学ぶ 「手っ取り遅くSQLを学ぶ」とは？すぐにSQLを使えるよう学ぶのではなく、まわりくどくSQLを理解して学んでいく方法で解説します。\n「手っ取り早くSQLを学ぶ」と言ったら、よく使うSQLをなるべくシンプルな形にして、実際に試しながら、徐々に応用していく方法だと考えています。 「手っ取り遅くSQLを学ぶ」はその逆で、SQLの記法は後回しにして考え方を解説していきます。\nまずはテーブル SQLは主にリレーショナル・データベース（RDBMS）で使用されるデータ操作のための言語です。\nリレーショナル・データベースは「テーブル」をデータの集合として使用しているので、SQLを学ぶには、まずテーブルを理解する必要があります。\nテーブルとは、訳すと「表」なので、コンピューターと関係なくても日常でも溢れている表現方法です。 名簿であったり、一覧表など一般に、よく目にします。\nSQLで扱うテーブルは、表全般の中でもう少しルールが定まったものを対象とします。\n他のプログラミング言語と同じく「型を持った値」があります。数値の123や文字列の’abc’等。 この「型を持った値」を複数持つことができます。これをレコードと言ったり、「行」と言ったりします。\nこのレコードが含んでいる値の数と型が一致している集合がテーブルです。 通常は、単純な数合わせではなく、型が一致しているだけでもなく、同じ意味を表しています。これをカラムと言ったり、「列」と言ったりします。 このカラムには名前を付けられることが多いです。「格納」する場合は、あとで取り出す必要があるので名前が必須になります。\nこの集合をレコードの配列と考えても良いかもしれませんが、この時点では順序は不動なことに注意が必要です。 他のプログラミングからは、2次元配列で表される場合もありますが、プログラミング言語を理解している人は、構造体の配列と考えた方が良いでしょう。実際にSQLで操作したデータをプログラミング言語で受け取るときには、構造体の配列に変換することがよくあります。\nそして、テーブルの行も列も理論上は0以上無限まで可能です。 実際には上限はデータベースの仕様やコンピューターの限界値に左右されますが、下限は0から可能です。\n行が0というのは、たとえば名簿リストを作成したとして該当者が存在しないことはあるのでよくある話だと思いますが、列が0というのは理論上存在しても現実にはないので、定義はできないようにしているデータベースもあります。\nこの「テーブル」単位にしておけば、自分の欲しいデータを取得できると考えて作られたのがリレーショナル・データベース（RDBMS）で、そのための記法がSQLです。\nSQLとは？ リレーショナル・データベースは、SQLを実行できるだけでなくテーブルを効率よく管理するためにいろいろな機能が備わっていますが、主要なSQLはテーブルを操作するため、少し切り離して考えることができます。\nSQLはテーブル（複数でも可）から「1つの」テーブルを作ることを目的としています。\nSQLをすでに知っている人からすると、テーブルを作ると言ったら「CREATE TABLE」と思うかもしれません。 データベースにテーブルを作るという狭い意味ではそうなのですが、その結果がテーブルになるという意味で広い意味では、テーブルを作るという目的であると言えます。\nINSERT/UPDATE/DELETEなどの更新系SQL文は、実行した結果がデータベースに反映されます。\n取得するSQL文と説明されることが多いSELECT文は、実際には取得ではなく、「SELECT」の意味の通り、「選択する」と解釈する方が正しいです。 「SELECT」文により選択された結果が指定されていない場合は、暗黙の了解として結果を取得します。\n3つ以上のテーブルから1つのテーブルを「作る」場合、まず2つのテーブルから1つのテーブルを作成し、作成されたテーブルと残ったテーブルから、1つのテーブルを作成するといった風に考えることで3つ以上のテーブルから1つのテーブルを作成できます。\n数学（というよりも算数）の「3+2+4」を「3+2」してその結果から「5+4」を計算するのと似ています。\nつまりSQLはテーブルとテーブルの計算式と言えます。\nJOIN テーブルの計算式として、一番基本は算数の足し算に相当するテーブルのJOINです。 ただし、テーブルとテーブルのJOINは、むしろ算数の掛け算に似ています。\nまずは列だけ考えてみます。テーブルAとテーブルXをJOINします。\nテーブルA\nA B テーブルX\nX Y テーブルとテーブルのJOINは、双方の「列」はそのまま全部使用します。\nA B X Y 続いて、行のJOINを考えます。\nAテーブルの1行に対してXテーブルのすべての行に合成します。これをAテーブルのすべての行でおこないます。\nA B 1 3 2 4 X Y 1 8 2 9 Aの1行目とXテーブルを合成\nA B X Y 1 3 1 8 1 3 2 9 Aの2行目とXテーブルを合成\nA B X Y 2 4 1 8 2 4 2 9 すべての行を合わせた結果がAテーブルとXテーブルのJOINです。\nA B X Y 1 3 1 8 1 3 2 9 2 4 1 8 2 4 2 9 （順番は決まってないので、逆にテーブルXの1行に対してAテーブルでも構いません）。\n難しいことをやっているように見えますが、実際には2桁以上の掛け算で一の位をそれぞれの桁に掛けて、十の位をそれぞれの桁に掛けるようにして、合算していないだけです。\nそしてJOINの結果はAテーブルの行数×Xテーブルの行数になります。2行×2行であれば4行の結果となり、100行×100行であれば10,000行の結果になります。\nこれが、JOINの基本形であり、現在の分類では「CROSS JOIN」と呼ばれます。\nただし、実際にこの結果が欲しいことはまれなので、「CROSS JOIN」を使う機会はほとんどありません。 実際にほしい結果を得るためには条件式が必要になります。\n条件式 条件式は、他のプログラミング言語でも「if文」等で使用されるため、なんとなくわかる理解できる部分ではあると思いますが、SQLのテーブルに対しての条件式の考え方を理解しておくと、今後のSQLの学習に役立ちます。\nすでにテーブルのJOINを説明していますが、テーブルの条件式はテーブルのJOINの延長で考えることができます。\nまず、テーブルは0以上の行、列を持つと説明しました。そうすると1行1列のみのテーブルも可能です。 つまり1つの値（例えば 「23」という数値）は、1行1列のみのテーブルにすることができます。 「型」が必要だと説明しましたが、1つの値であれば、推測することができます。 （通常、引用符で囲まれていなければ数値として解釈し、引用符で囲まれていれば文字列として解釈できます。）\nそして、ある対象となるテーブルに対して、1行1列のテーブルをJOINすると以下のようになります。\nAテーブル\nA B 1 3 2 4 「2」を1行1列のテーブルと解釈 – 2 Aテーブルと「2」のテーブルをJOIN\nA B - 1 3 2 2 4 2 列はそのまま並べて、Aのテーブルに対して、それぞれ2のテーブルを合成しています。\nこれだけでは、条件式になっていません。ここから「2」のテーブルを「A=2の式」にしてみます。\nAテーブル\nA B 1 3 2 4 「A=2」を1行1列のテーブルと解釈 – A=2 Aテーブルと「A=2」のテーブルをJOIN\nA B - 1 3 A=2 2 4 A=2 「A=2」のAはA列の意味です。つまり、A列の値を代入できます。\nA B - 1 3 1=2 2 4 2=2 算数の等記号としてはおかしいですが、プログラミング言語を学んでいる人はおなじみでしょう。「=」の条件が成立している場合は「true」真で、成立しない場合は「false」偽です。 （最近のプログラミング言語では、代入と区別するために「==」が使われたりしますが、SQLでは式と解釈される箇所が明確なので「=」で比較します。）\nというこで、さらに変換が可能です。\nA B - 1 3 false 2 4 true この条件式がtrueの場合のみ残すのがテーブルの条件式です。\nA B - 2 4 true これは、AテーブルのA=2が該当する行を抽出するだけの簡単なことを、まわりくどく説明しただけです。 しかしながら、複雑な条件式もそのまま延長して考えることができます。\n先程は1行1列のテーブルでしたが、複数行のテーブルでも変わりません。 前に出した、AテーブルにXテーブルによって条件式を当てはめます。求めたいのは「AテーブルのA列=XテーブルのX列」という条件式です。\nA B 1 3 2 4 X Y 1 8 2 9 まずテーブルのJOINをした上で、条件式の列も書き出してみます。条件式を見失わないように変遷を⇒でつなぎます。A=Xを当てはめていくと最後のtrue/falseが求められます。\nA B X Y - 1 3 1 8 「A=X」 ⇒ 「1 = 1」 ⇒ true 1 3 2 9 「A=X」 ⇒ 「1 = 2」 ⇒ false 2 4 1 8 「A=X」 ⇒ 「2 = 1」 ⇒ false 2 4 2 9 「A=X」 ⇒ 「2 = 2」 ⇒ true trueのみを抽出すると、以下のテーブルになります。\nA B X Y 1 3 1 8 2 4 2 9 「CROSS JOIN」よりも意味がありそうなテーブルが作成できました。 実際に「CROSS JOIN」が使用されることは多くありませんが、2つのテーブルの共通の値を使用してJOINすることは頻繁に発生します。\nJOINと条件式を組み合わせることで、自分が求めたいテーブルの多くを（全てはありませんが）作成できます。\nSQL文にしてみる ここで、これまでやってきたことをSQL文にしてみます。\nまず、Aテーブルの「A=2」という条件式でテーブルを作成しました。 条件式はSQLでは 「WHERE」のあとに書きます。\nつまり、\nWHERE A=2です。\nAテーブルに対しての条件式なので、Aテーブルを指定します。テーブルを指定するにはSQL文では「FROM」の後に書きます。\nつまり、\nFROM Aテーブルです。\n最後に、条件に合ったテーブルから、どの列を含めてテーブルを作成するかを指定します。ここでは、もともと存在していたA列とB列をそのまま指定します。列の指定は「SELECT」の後に書きます。複数並べたいときには「,」でつなげます。\nつまり、\nSELECT A,Bです。これをつなげて書けばよいわけですが、書く順番があり、説明した順とは逆です。\nつまり、\nSELECT A,B FROM Aテーブル WHERE A=2により以下の結果が作成されます。\nA B 2 4 補足しておくと、SELECTの列指定がもともと存在していた列全部の場合は「*」と書くこともできます。\nSELECT * FROM Aテーブル WHERE A=2でも同様の結果になります。 「*」を指定しても条件式の「A=2」の列は含まれません。\n続けて、「AテーブルのA列=XテーブルのX列」をSQLにしてみます。 条件は「A列=X列」ですが、どのテーブルの列かを明確にするために「テーブル名.列名」のように「.」でテーブルを指定出来ます。\nWHERE Aテーブル.A = Xテーブル.Xです。後はテーブルは2つ並べて、列名は「*」で代用します。\nSELECT * FROM Aテーブル,Xテーブル WHERE Aテーブル.A = Xテーブル.Xこれで実際に以下の結果が求められます。\nA B X Y 1 3 1 8 2 4 2 9 とは言え、今どきのSQL入門書では載っていないか推奨されない書き方です。 理論上は「CROSS JOIN」が基本のため、そこから条件が追加されていくのは自然に見えますが、実際には「CROSS JOIN」が必要になることは、ほぼなく、テーブルのJOINにはJOINに関連した「条件」が付くほうが圧倒的に多いです。\nそうすると、テーブルを並べた後に、それぞれのテーブルのJOINの「条件式」があるはずで、それが離れた場所にあると読むのも書くのも大変になります。\nそのため、テーブルのJOINと条件式をセットにした書き方が存在します。\nその書き方で書くと以下のようになります。\nSELECT * FROM Aテーブル INNER JOIN Xテーブル ON (Aテーブル.A = Xテーブル.X)テーブルを並べる書き方よりも冗長ではありますが、テーブルのJOINと条件式がセットになることで、明確になっています。\n",
    "description": "",
    "tags": [
      "sql"
    ],
    "title": "手っ取り遅くSQLを学ぶ",
    "uri": "/blog/sql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "Aggregate json with trdsql I agree that the aggregation of jq described in the Introducing zq is not easy.\nI’ve seen A Practical Example of zq, zq was not easy for me.\nSQL is not easy for everyone, but it is a language that many people can use. I am one of them.\nOf course, it is difficult to process all JSON with SQL. But what about using them in combination?\nRecent versions of trdsql allow the use of jq syntax, including gojq.\nIn addition, I’ve improved the handling of null in JSON in the latest version, making it easier to aggregate JSON.\nLet’s try with the e jq and zq examples.\njq jq '[.docs[] | {title,author_name: .author_name[0], publish_year: .publish_year[0]} | select(.author_name!=null and .publish_year!=null)] | group_by(.author_name)| [.[] |{author_name: .[0].author_name, count: . | length}] | sort_by(.count) | reverse | limit(3;.[])' openlibrary.json { \"author_name\": \"S. Stepniak\", \"count\": 38 } { \"author_name\": \"Władysław Stępniak\", \"count\": 7 } { \"author_name\": \"Władysław Stępniak\", \"count\": 4 }zq zq -j \"over docs | {title, author_name: author_name[0], publish_year: publish_year[0]}| has(author_name) and has(publish_year)| count() by author_name | sort -r count | head 3\" openlibrary.json {\"author_name\":\"S. Stepniak\",\"count\":38} {\"author_name\":\"Władysław Stępniak\",\"count\":11} {\"author_name\":\"Andrzej Stępniak\",\"count\":4}trdsql trdsql treats JSON(jq processed JSON) as a table and executes SQL.\ntrdsql -driver sqlite3 -ojsonl \"SELECT json(author_name)-\u003e\u003e0 AS author_name, count(*) AS count FROM openlibrary.json::.docs WHERE author_name IS NOT NULL AND publish_year IS NOT NULL GROUP BY json(author_name)-\u003e\u003e0 ORDER BY count DESC LIMIT 3\" {\"author_name\":\"S. Stepniak\",\"count\":38} {\"author_name\":\"Władysław Stępniak\",\"count\":7} {\"author_name\":\"Władysław Stępniak\",\"count\":4}The “.docs” after the “::” in “openlibrary.json::.docs” is the jq syntax. Only this part is jq syntax, and the others are SQL.\ntrdsql just includes the gojq library, which eliminates the need for the jq command. This is the same as passing jq as a filter.\njq .docs openlibrary.json| trdsql -driver sqlite3 -ijson -ojsonl \"SELECT json(author_name)-\u003e\u003e0 AS author_name, count(*) AS count FROM - WHERE author_name IS NOT NULL AND publish_year IS NOT NULL GROUP BY json(author_name)-\u003e\u003e0 ORDER BY count DESC LIMIT 3\" sqlite3 does not yet have a standard unicode normalization function. However, PostgreSQL has a normalize function.\ntrdsql -driver postgres -dsn \"dbname=trdsql\" -ojsonl \"SELECT json(normalize(author_name))-\u003e\u003e0 AS author_name, count(*) AS count FROM openlibrary.json::.docs WHERE author_name IS NOT NULL AND publish_year IS NOT NULL GROUP BY json(normalize(author_name))-\u003e\u003e0 ORDER BY count DESC LIMIT 3\" {\"author_name\":\"S. Stepniak\",\"count\":38} {\"author_name\":\"Władysław Stępniak\",\"count\":11} {\"author_name\":\"Andrzej Stępniak\",\"count\":4}I don’t think it’s right to use SQL for everything, but I’d like to argue that there are enough problems with people who are good at SQL.\nLink trdsql(github) gojq(github) [zed](https://github.com/brimdata/zed(github)(zq) jq(github) ",
    "description": "",
    "tags": [
      "trdsql",
      "jq",
      "SQL",
      "zq",
      "english"
    ],
    "title": "Another way to aggregate json(jq + SQL)",
    "uri": "/blog/jqsql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Zq",
    "uri": "/tags/zq/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.10.0をリリースしました。 リリースのページから各バイナリがダウンロードできます。\nNULLの扱い変更 今回はNULLの扱いを変更しました。\nJSONにはnullがありましたが、CSV等のテキストフォーマットには無いため、 すべて空文字として扱っていましたが、JSONのnullをSQLのNULLとして扱うようにしました。\nJSONの文字列とみなせる箇所がnullの場合は、それほど問題ではありませんでしたが、 配列（\"[]\"）のようなJSONが入る箇所がnullの場合に空文字（\"\"）にしてしまうと、 SQLのJSON関数に渡しづらい問題があったためSQLのNULLにするようにしました。\nこれによりJSONの集計問題が解きやすくなっていると思います。\nIntroducing zqで示されている問題にSQLで解くときにスッキリ書けるようになっています。\n上記の\"A Practical Example\"は、以下のSQLで解けます。\nSELECT json(author_name)-\u003e\u003e0 AS author_name, count(*) AS count FROM openlibrary.json::.docs WHERE author_name IS NOT NULL AND publish_year IS NOT NULL GROUP BY json(author_name)-\u003e\u003e0 ORDER BY count DESC LIMIT 3;{\"author_name\":\"S. Stepniak\",\"count\":38} {\"author_name\":\"Władysław Stępniak\",\"count\":7} {\"author_name\":\"Władysław Stępniak\",\"count\":4}Unicodeの正規化はPostgreSQLエンジンを使用する場合はnormalize()関数があるため、間に入れれば可能です。SQLite3エンジンを使用する場合は、 別のコマンドで正規化してからパイプで使用する必要があります。\njq .docs openlibrary.json| uconv norm | trdsql -driver sqlite3 -ijson -ojsonl \"SELECT json(author_name)-\u003e\u003e0 AS author_name, count(*) AS count FROM - WHERE author_name IS NOT NULL AND publish_year IS NOT NULL GROUP BY json(author_name)-\u003e\u003e0 ORDER BY count DESC LIMIT 3\" NULLオプション追加 また、-inullと-onullオプションを追加しました。-inullはSQLのNULLに変換する文字列を指定し、 -onullはSQLのNULLを指定された文字列に変換します。\nCSV等のフォーマットでは、主に空文字（\"\"）をNULLにするときに使用します。 また、出力するときに -onull \"\\N\"にしておくとPostgreSQLのCOPY文に適したフォーマットにできます。\nJSONで-inull \"\"はnullに加えて空文字をNULLに変換することもできます。-onull \"\"にするとnullを止めて空文字（\"\"）で出力されます。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.10.0",
    "uri": "/blog/trdsql_0100/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Pgunconf",
    "uri": "/tags/pgunconf/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "「作ったツール紹介」というタイトルで発表しました https://pgunconf.connpass.com/event/240528/\n自分で作った以下のツールを紹介してます。\ntrdsql ov pgsp jpug-doc-tool また、ovの関連でページャーとして、lessとpspgも紹介してます。\nとくに、lessはまだ正式リリース版ではないですが、ヘッダーオプションが追加されるということで、PostgreSQLに限らず全DBのCLIを使っている人にとって、朗報だと思います。\nまた、ヘッダー固定が可能なことを前提にすると他のアプリケーションの作り方も変わっていくものだと思っています。\njpug-doc-toolでみんなの自動翻訳＠TexTraを使用できるようにしていることを紹介しました。\nみんなの自動翻訳の説明はだいぶ省略しましたが、対訳語の登録や対訳集を学習させる等によりカスタマイズエンジンをみんなで育てることができれば、PostgreSQL向けの翻訳精度が上がっていくと思うので、利用者を増やしたいところです。\n",
    "description": "",
    "tags": [
      "pgunconf",
      "postgresql"
    ],
    "title": "第32回 PostgreSQLアンカンファレンス@オンラインで発表しました",
    "uri": "/blog/pgunconf/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.10.0をリリースしました Terminal PAGER releases ov v0.10.0\nreload/watchの追加 ファイルを再読込みするreloadを追加しました。ファイルを再オープンして読み込み直します。(起動後のF5 or ctrl+alt+l)\n標準入力等のパイプ経由の場合は、それまで読み込んだ入力をリセットして、そこから読み込みを開始します。\nwatchは指定したｎ秒毎にreloadを繰り返します。watchの指定はオプション--watch nまたは起動後のF4 or ctrl+alt+wで指定して開始します。\n例えば/proc/meminfo等の特殊ファイルに対しても使用できます。\n終了時の出力を改善 ov終了時に表示している画面を再現するように出力できます（画面をクリアせずに終了の要望がきますが、その代替としての機能です）が、lessの場合はその時点の画面ではなく、それまで表示した画面を残して終了できます。\nlessとまったく同じ機能はできませんが、さかのぼって出力させておきたい場合があるときのために出力範囲をできるようにしました。\nオプションの--exit-write-beforeと--exit-write-afterで指定できます。--exit-write-beforeを多めに指定しておけば、画面をスクロールした後そこまでの行まで先頭から出力できるようになります。\nまた逆に--exit-write-afterを3行等少なく指定すれば、現在表示している画面の上から3行目までのように少なく出力できます。\nこれは起動した後終了するときにctrl+qで終了しようとするとその前に範囲指定できます。\nWriteAndQuit Before:After: 1000:0 のようにすると1000行遡って（1000行に満たなければ先頭）出力します(Afterの0は画面下限を意味します)。\nWriteAndQuit Before:After: :3 とした場合は、現在の画面を3行のみ出力します。\n描画速度の改善 環境によって表示が遅い場合があるようなので、描画速度を改善しました。\novはunisegを使用して1文字を判定しているので、Unicodeの結合文字に対応していない他のソフトに比べて遅い場合があります。それでも大抵の環境では気づくことはない速度で描画できていると思います。\n過去のバージョン v0.10.0 reload,watchを追加 v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.10.0",
    "uri": "/blog/ov_010_0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.9.1をリリースしました。 リリースのページから各バイナリがダウンロードできます。\n読み込み行数を指定できるオプションを追加しました -ilr num で行数を指定します。SQLでは結果を制限するLIMITがありますが、これは入力の行数を制限します。 大きなファイルでは、読み込むのに時間がかかるためSQLを試行するときや、全部の結果が必要ないとき等に使用できます。\nJSON出力時にオブジェクトの順番を固定しました JSON出力ではSQLでSELECT a,b FROM csvとしてもaとbの順番が不定で出力されていました。\nSELECT a,b FROM ab.csv[ { \"b\": \"2\", \"a\": \"1\" }, { \"b\": \"4\", \"a\": \"3\" }, { \"b\": \"6\", \"a\": \"5\" } ]SQLの出力結果をgoのmapにしてからJSONを出力するので、オブジェクト順は不定になっていました。 これをorderedmapを使用して、結果を指定順になるようにしました。\nGOの対象バージョンを変更 goの対象バージョンを1.16以上にしました。リリースのバイナリは1.17でビルドするようになっています。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.9.1",
    "uri": "/blog/trdsql_091/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.9.6をリリースしました リダイレクト出力がうまくいかない場合があったので修正しました。\n値がない列があると列モードのハイライト選択がそれ以降選択できない問題があったので修正しました。\n過去のバージョン v0.9.6 リダイレクト出力、列モードの修正 v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.9.6",
    "uri": "/blog/ov_096/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Jpug-Doc",
    "uri": "/tags/jpug-doc/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Jpug-Doc",
    "uri": "/categories/jpug-doc/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "PostgreSQLの日本語マニュアルのヘルパーツール PostgreSQLのマニュアルの日本語への翻訳に参加していますが、その翻訳に役立つツールとしてjpug-doc-toolを公開しました。\n基本的な方針 PostgreSQL日本語マニュアルについては前に書いた手順と大きく変わっていませんが、SGMLの拡張子のままですがXMLとして解釈されるように変わっています。\nXMLのライブラリを利用して読むことは可能になっていますが、PostgreSQLに入っているドキュメントは自動フォーマットされてレポジトリに入っていないため、XMLの処理系で処理して書き出すと元ドキュメントの比較が難しくなってしまいます。\nそのため、XMLライブラリは使用せず、正規表現を使用し、必要なら最小限の書き換えをする作りになっています。\n使い方 サブコマンドにより文書のチェックや抽出、書き換えができます。\n$ jpug-doc-tool jpug-doc の翻訳を補助ツール。 前バージョンの翻訳を新しいバージョンに適用したり、 翻訳のチェックが可能です。 Usage: jpug-doc-tool [command] Available Commands: check 文書をチェックする completion Generate the autocompletion script for the specified shell extract 英語と日本語翻訳を抽出する help Help about any command list 辞書から英語と日本語訳のリストを出力する mt APIを使用して文字列を翻訳する replace 英語のパラグラフを「\u003c!--英語--\u003e日本語翻訳」に置き換える Flags: --config string config file (default is $HOME/.jpug-doc-tool.yaml) -h, --help help for jpug-doc-tool -t, --toggle Help message for toggle Use \"jpug-doc-tool [command] --help\" for more information about a command. jpug-doc-toolはpostgresql/doc/src/sgml/で実行します。拡張子sgmlのファイルを指定するとそのファイルを対象にします。指定しなかった場合はドキュメントを全て対象とします。\ncheck PostgreSQLの文書で翻訳対象となる箇所の多くは以下のようになっています。\n\u003cpara\u003e This is original document. \u003c/para\u003ejpug-docの翻訳をおこなう場合以下のように追加して日本語訳を入れます。\n\u003cpara\u003e \u003c!-- This is original document. --\u003e これは翻訳した文です。 \u003c/para\u003e上記のように\u003cpara\u003e内にコメントが無いとまだ翻訳が済んでいない可能性があるため、それをチェックします。\n翻訳抜けだけでなく、翻訳が古いままになっている場合があるため、日本語訳の数値と日本語訳に含まれる英単語が英語の原文にあるかどうかをチェックできます。\n以下のように使用します。-wが英単語のチェック、-nが数値のチェックです。\n$ jpug-doc-tool -w -n catalogs.sgml よくあるのが、意味自体は変わらなくてもタグが変更になっている場合です。\n元々は\u003ccommand\u003eANALYZE\u003c/command\u003eだったのが\u003cxref linkend=\"sql-analyze\"/\u003eに変更される場合があります。この場合同様の変更がいっぺんに変更されるので、日本語訳の修正が漏れてしまうことがあります。\n\u003c======================================== [command ｜ /command]が含まれていません Custom \u003cxref linkend=\"sql-analyze\"/\u003e function, or zero to use the standard function ----------------------------------------- 独自の\u003ccommand\u003eANALYZE\u003c/command\u003e関数。標準関数を使用する場合はゼロ ========================================\u003eまた、英語の原文に数値が含まれていた場合は、日本語訳にもその数値が含まれているはずなので、その数値が含まれていない場合や違う数値になっていた場合は、日本語訳の更新が漏れている可能性があります。\n\u003c======================================== 原文にある[2003 ｜ 1999]が含まれていません Extracts the first substring matching \u003cacronym\u003eSQL\u003c/acronym\u003e regular expression; see \u003cxref linkend=\"functions-similarto-regexp\"/\u003e. The first form has been specified since SQL:2003; the second form was only in SQL:1999 and should be considered obsolete. ----------------------------------------- \u003cacronym\u003eSQL\u003c/acronym\u003e正規表現にマッチする部分文字列を返します。\u003cxref linkend=\"functions-similarto-regexp\"/\u003eを参照してください。 ========================================\u003e2003、1999といった数値はバージョンアップで追加された文書なので翻訳側でも追加されている必要があります。\n",
    "description": "",
    "tags": [
      "jpug-doc",
      "jpug-doc-tool"
    ],
    "title": "Jpug-doc-tool",
    "uri": "/blog/jpug-doc-tool/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Jpug-Doc-Tool",
    "uri": "/tags/jpug-doc-tool/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.9.5をリリースしました Terminal PAGER releases ov v0.9.5\nサスペンド／レジュームのサポートを追加 そのままでは、あまり使わなくなってきたと思っていますが、サスペンド／レジュームを出来るようにしました。 ov表示中に一旦Shellを起動してコマンドが実行できます。Shellを終了するとovに戻ります。シグナルのサスペンドも（サポートしている環境では）サスペンドします。\nリダイレクト出力をサポート これまで echo \"hoge\" | ov \u003e out.txt としてもovの表示はしても出力はしませんでしたが、リダイレクトするようにしました。 また、標準出力をパイプで受け取った場合に、標準エラー出力によって画面が崩れることがあったのをなるべく抑止するように改善しました。\nその他内部的にリファクタリングにより多くの修正をしています。\n過去のバージョン v0.9.5 サスペンド／レジュームのサポート v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.9.5",
    "uri": "/blog/ov_095/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql はCSVやLTSVと共にJSONに対してもSQLを実行できるツールですが、SQLを使用するため得意な対象はフラットなJSONです。 ただし、v0.9.0からjqの構文が使え、SQL内でもSQLの関数が使えるため、内容によっては簡単に書くことができる場合があります。\nデフォルトのsqlite3にもJSON関数がありますが、ここではよりJSON関数が充実しているPostgreSQL 14を使用します。\n基本的な使用法 SQLを実行する対象として複数の列のリストの形になっているものが対象です。 以下のように{``}で囲まれた複数の名前: 値が,で並べられたJSONが基本的な形です。 改行で区切られた（実際には）複数のJSONが並べられたLDJSONやJSONLと呼ばれるものは一番SQLで実行しやすい形です。\n{ \"name\": \"Tanaka\", \"age\": 26 } { \"name\": \"Suzuki\", \"age\": 32 }一つのJSONの場合は上記を配列化します。\n[ { \"age\": \"26\", \"name\": \"Tanaka\" }, { \"age\": \"32\", \"name\": \"Suzuki\" } ]どちらもそのままSELECT name, age FROM example0.jsonのようにtrdsqlのSQLとして実行できます。\nJSONはオブジェクトや配列で入れ子に出来るため、ルートが対象とならない場合があります。以下の場合は、そのまま実行すると menu 列が一つに中身がすべて入っていることになります。\n{ \"menu\": { \"id\": \"file\", \"value\": \"File\", \"popup\": { \"menuitem\": [ { \"value\": \"New\", \"onclick\": \"CreateDoc()\" }, { \"value\": \"Open\", \"onclick\": \"OpenDoc()\" }, { \"value\": \"Save\", \"onclick\": \"SaveDoc()\" } ] } } }SQLのJSON関数を使用することで内部のオブジェクトにアクセスできますが、ほとんどがJSON関数の記述になってしまうのでSQLで実行するメリットが感じられません。\ntrdsqlではjq構文を使用して、JSONから必要な箇所を取り出せます。menuitemに対してSQLを実行するには、以下のようにできます。\ntrdsql -oat \"SELECT * FROM example.json::\\\".menu.popup.menuitem\\\"\" +-------+-------------+ | value | onclick | +-------+-------------+ | New | CreateDoc() | | Open | OpenDoc() | | Save | SaveDoc() | +-------+-------------+jq構文はファイル名の後に::でつないだ後や -ijqオプションに書くことができます（一行で書く場合、シェルに解釈されるためエスケープが必要な場合があります。ダブルクォーテーションは必要なければ省略できます)。\njqの使用例をtrdsqlで実行する JSONをCSVに変換するのをjqでやる方法がよく紹介されていますが、trdsqlではデフォルトの動作です。\njq コマンドで JSON を CSV に変換する の例 [ {\"key1\": \"value11\", \"key2\": \"value12\", \"key3\": \"value13\"}, {\"key1\": \"value21\", \"key2\": \"value22\", \"key3\": \"value23\"}, {\"key1\": \"value31\", \"key2\": \"value32\", \"key3\": \"value33\"}, {\"key1\": \"value41\", \"key2\": \"value42\", \"key3\": \"value43\"} ]CSV出力はデフォルトなので、一番シンプルです。\ntrdsql \"SELECT * FROM sample1.json\" 列名をヘッダーとして出力するには -ohオプションをつけます。\ntrdsql -oh \"SELECT * FROM sample1.json\" ダブルクォーテーションで括るのを強制するなら-oaqオプションも追加します。\ntrdsql -oh -oaq \"SELECT * FROM sample1.json\" \"key2\",\"key3\",\"key1\" \"value12\",\"value13\",\"value11\" \"value22\",\"value23\",\"value21\" \"value32\",\"value33\",\"value31\" \"value42\",\"value43\",\"value41\"LTSVやJSONLにもオプションのみです。つまりJSON\u003c-\u003eJSONLの相互変換が可能です。\ntrdsql -oltsv \"SELECT * FROM sample1.json\" key1:value11\tkey2:value12\tkey3:value13 key1:value21\tkey2:value22\tkey3:value23 key1:value31\tkey2:value32\tkey3:value33 key1:value41\tkey2:value42\tkey3:value43trdsql -ojsonl \"SELECT * FROM sample1.json\" {\"key1\":\"value11\",\"key2\":\"value12\",\"key3\":\"value13\"} {\"key1\":\"value21\",\"key2\":\"value22\",\"key3\":\"value23\"} {\"key1\":\"value31\",\"key2\":\"value32\",\"key3\":\"value33\"} {\"key1\":\"value41\",\"key2\":\"value42\",\"key3\":\"value43\"}sample2.jsonの例はjqでもSQLのJSON関数でも複雑です。\n[ { \"id\" : 1, \"created_at\" : \"2018-05-27\", \"attrs\" : [ { \"key\": \"firstname\", \"value\": \"John\" }, { \"key\": \"lastname\", \"value\": \"Smith\" }, { \"key\": \"middlename\", \"value\": \"W\" } ] }, { \"id\" : 2, \"created_at\" : \"2018-05-26\", \"attrs\" : [ { \"key\": \"firstname\", \"value\": \"太郎\" }, { \"key\": \"lastname\", \"value\": \"山田\" } ] } ]idとcreated_atはそのまま列名になりますが、まずattrsはtextとして扱われます。middlenameを取り出すのはJSONやJSONBにキャストしてSQLのJSON関数で取り出す方法でやってみます。\ntrdsql \\ \"SELECT \\ id, \\ jsonb_path_query_array(attrs::jsonb, '$ ? (@.key == \\\"middlename\\\").value')-\u003e\u003e0 as middle, \\ created_at \\ FROM sample2.json\" 1,W,2018-05-27 2,,2018-05-26jq では要素がない場合にif文を使用していましたが、jsonb_path_query だと同様にidが1しか該当しないのでjsonb_path_query_arrayを使用することで配列化しています。返ってくるのはjsonオブジェクトなので\"で括られた文字列からSQLの文字列を取り出すために-\u003e\u003e0を使用しています。\njqの代わりにperlを使ったり、mysqlを使ったり(できなかった) の例 JSON Generator – Tool for generating random dataで生成されたJSONは、フラットで一部配列を使用しているのでtrdsql向けです。\ntrdsql -oat \"SELECT _id,tags FROM generated.json\" +--------------------------+-------------------------------------------------------------------------------+ | _id | tags | +--------------------------+-------------------------------------------------------------------------------+ | 61b88031bd73e2425c51b44f | [\"enim\",\"id\",\"minim\",\"anim\",\"occaecat\",\"cupidatat\",\"excepteur\"] | | 61b880314dce359ba9f6a963 | [\"dolore\",\"adipisicing\",\"fugiat\",\"anim\",\"nostrud\",\"est\",\"culpa\"] | | 61b880316ca649ff358b5978 | [\"exercitation\",\"fugiat\",\"esse\",\"irure\",\"elit\",\"irure\",\"magna\"] | | 61b8803159cfcb4349795b06 | [\"pariatur\",\"nisi\",\"consectetur\",\"aute\",\"veniam\",\"incididunt\",\"ad\"] | | 61b88031ee810a0f624f0b55 | [\"excepteur\",\"officia\",\"magna\",\"aliquip\",\"consectetur\",\"cupidatat\",\"aliquip\"] | +--------------------------+-------------------------------------------------------------------------------+jq で IP アドレスを sort_by しようと思ったがうまくいかなかったので大人しく sort -V を使った の例 jqのsort_by関数ではIPアドレスに対応していませんが、PostgreSQLにはネットワークアドレス型があるため、IPアドレスのソートが簡単におこなえます。\nip-ranges.jsonは以下のような、大きなJSONファイルです。\n{ \"syncToken\": \"1632282194\", \"createDate\": \"2021-09-22-03-43-14\", \"prefixes\": [ { \"ip_prefix\": \"3.5.140.0/22\", \"region\": \"ap-northeast-2\", \"service\": \"AMAZON\", \"network_border_group\": \"ap-northeast-2\" }, { \"ip_prefix\": \"13.34.37.64/27\", \"region\": \"ap-southeast-4\", \"service\": \"AMAZON\", \"network_border_group\": \"ap-southeast-4\" }, ....IPアドレスが入っているリストはprefixes項目に入っているため、JSONファイルそのままをSQLの対象とするとJSON関数でprefixesを取り出して処理することになります。可能は可能ですが、この場合はjq構文で.prefixes を指定し、そのリストに対してSQLを実行します。\nPostgreSQLではcidr型にキャストすればIPアドレスとしてソートできます。\ntrdsql \"SELECT ip_prefix FROM ip-ranges.json::.prefixes ORDER BY ip_prefix::cidr\" 3.0.0.0/15 3.0.0.0/15 3.0.5.32/29 3.0.5.224/27 3.2.0.0/24 3.2.0.0/24 3.2.2.0/24 3.2.2.0/24 3.2.3.0/24 3.2.3.0/24 ...",
    "description": "trdsqlとPostgreSQL 14を使用してjqに対抗します。",
    "tags": [
      "trdsql",
      "jq",
      "PostgreSQL"
    ],
    "title": "trdsql+PostgreSQL 14でJSONを処理する",
    "uri": "/blog/trdsql_jq/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.9.4をリリースしました Terminal PAGER releases ov v0.9.4\n検索の改善 検索にインクリメンタルサーチを追加しました。issue#83に上がっていたインクリメンタルサーチを実装しました。 一文字入力するごとに検索をして最短でみつかった語の位置に移動します。 検索は毎回goroutineを使用しているため、入力を妨げないようになっています（小さなファイルだと気がつかないですが、大きなファイルで固まる実装が多いので、その差を実感していただけると思います）。\n検索は元々、正規表現の入力も可能だったのですが、入力時に特殊文字を\\でエスケープする等のわかりづらさがあったので、今回正規表現検索を使用するかを分けました。 インクリメンタルサーチでも正規表現は使用できます。\n元々、大文字、小文字を区別するスイッチはあったので、検索時は、これらの組み合わせによって動作が変わるため複雑になっています。\n機能 表示 (Default)切り替えキー コマンドオプション インクリメンタルサーチ (I) alt+i –incremental 正規表現 (R) alt+r –regexp-search 大文字小文字の区別 (Aa) alt+c -i, –case-sensitive オプションの他、設定によってデフォルトを変更できます。ov.yamlのコメントを外して設定してください。\nマークの改善 こちらもissue#86に上がっていたマークの削除とマークの可視化を実装しました。\nこれまで、現在の見ている行にマークを付けて移動して戻れるようにしていたのですが、削除機能は付けていませんでした。個別削除と全削除をできるようにしています。\nマークすると先頭の背景色を変更して可視化しています。この部分はスタイルカスタマイズでStyleMarkLineにより、背景色、前景色、太字、アンダーライン等カスタマイズ可能です。また、MarkStyleWidthにより先頭から何文字スタイルを適用するか設定可能です。一行全部を変更したい場合は -1を指定してください。\nスキップ行の指定 v0.9.3のオプションとして、先頭から指定した行を不可視にするオプションを追加しました。これは--headerと組み合わせて使用することを想定しています。 --headerを指定すると先頭から指定した行を固定表示できますが、余分な行があると表示領域が狭くなります。\n例えばASCIIのボックス表示では、最上位行が区切り線の行になります。1行だけならまだ良いですが、横に長いデータの場合、折返し表示モードでは区切り線が何行にも渡って表示される場合があります。\n1 +----+--------+ 2 | id | name | 3 +----+--------+ 4 | 1 | Orange | 5 | 2 | Melon | 6 | 3 | Apple | 7 +----+--------+この場合 1行スキップして、ヘッダーを1行に指定すると2行目のみヘッダーとして扱われ、4行目以降がボディとしてスクロール対象になります。 おまけ インクリメンタルサーチと正規表現の組み合わせで以下のようなことができるようになりました:-) 過去のバージョン v0.9.4 マーク機能の強化、インクリメンタルサーチを追加して検索強化。 v0.9.3 スキップ行オプションの追加 v0.9.2 主要モジュール更新版 v0.9.1 半画面下移動のバグ修正。goのバージョンを1.16以降へ変更。 v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.9.4",
    "uri": "/blog/ov_094/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Mdtsql",
    "uri": "/tags/mdtsql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Mdtsql",
    "uri": "/categories/mdtsql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "mdtsql v0.0.3をリリースしました mdtsql v0.0.3をリリースしました。 Markdown テーブルに対してSQLを実行できるツールです。\nREADME.mdやGitHubのWikiなどで、Markdownのテーブルを書くことがありますが、ドキュメント翻訳担当リスト14.0のようにテーブルが大きくなる場合に手で編集するのも大変ですが、探し出したり、集計したり、更新したり、といった作業が面倒になることがあります。\nそこでtrdsqlのモジュールを使って、Markdown Tableに対してもSQLを実行できるようにしました。\ntrdsqlは既に様々なフォーマットに対して実行できるようになっているため、Markdownを追加しても良いわけですが、一緒にするにはMarkdown用のオプションが必要になるのもどうかと思って、別にしてあります。\nmdtsqlはMarkdownファイルに対して実行すると解析してテーブルがあればテーブル情報を表示します。markdownにテーブルは複数含むことができるため、Markdown内のテーブルを指定するテーブル名をここで得ます。\n「ドキュメント翻訳担当リスト13.1.md」というファイルに実行してみます。\n$ mdtsql ドキュメント翻訳担当リスト13.1.md Table Name: [ドキュメント翻訳担当リスト13.1] +-------------+------+ | column name | type | +-------------+------+ | ファイル名 | text | | 担当者 | text | | 進捗 | text | | 備考 | text | +-------------+------+ Table Name: [ドキュメント翻訳担当リスト13.1_2] +------------------------+------+ | column name | type | +------------------------+------+ | お名前 | text | | マニュアルへの表記 | text | | マニュアルへの記載可否 | text | | 主な貢献内容 | text | +------------------------+------+ テーブル名がわかったら、-q SQL文でSQLを実行できます。\n$ mdtsql -q \"SELECT 担当者,count(担当者) FROM \\\"ドキュメント翻訳担当リスト13.1\\\" GROUP BY 担当者\" ドキュメント翻訳担当リスト13.1.md 担当者 count(担当者) - 36 分割して進行中 1 北山 6 小泉 120 斉藤 23 星合 3 橋本 3 田中 1 田中ひ 5 石井 5 高塚 6 と担当したファイル数を集計できます。\nmdtsql自体はちょっと前に作ってましたが、今回Markdown parserをgoldmarkに変更したことで、更新しやすくなったため新しい版を出しました。\n今後の改良がしやすくなったのではないかと思います。\n",
    "description": "",
    "tags": [
      "mdtsql"
    ],
    "title": "mdtsql v0.0.3",
    "uri": "/blog/mdtsql_003/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Bubbletea",
    "uri": "/tags/bubbletea/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "pgsp は PostgreSQLの pg_stat_progress viewを監視して表示するCLIツールです。\npg_stat_progress PostgreSQLでは、いくつか時間がかかる処理に対して進捗状況が見られるViewがあります。 Viewの名前は pg_stat_progressではじまり、analyze, cluster, create_index, vacuum, basebackup (version 14からは copyが追加される予定)などが取得できます。\n詳しくは progress-reportingを参照してください。\nこれらのViewは処理が始まったときにレコードが追加されて、変化する処理状況（フェーズや処理した数）を更新していき、終了するとレコードが消えます。SQLで簡単に確認できるので便利ですが、常に更新されていくため、状況を逐一見たいときにはpsqlでは\\watch等を利用してSELECTを繰り返して見る必要があります。\nSELECT * FROM pg_stat_progress_analyze; pgsp pgspはこれらのViewを監視して表示する専用のCLIツールです。Go製です。 やっていることはシンプルでpg_stat_progress_* のViewを定期的にSELECTで取得し、レコードが追加、更新されたら進捗に相当する数値でプログレスバーを更新します。\nPostgreSQLに普通に接続にいくので接続情報（ホスト、ポート、ユーザー、パスワード等）が必要です。 --dsnで設定してください。\npgsp --dsn 'host=ホスト名 port=ポート番号 user=ユーザー名 password=パスワード' UNIXドメインソケットを使用する場合はhostにpathを書きます。\npgsp --dsn 'host=/var/run/postgresql' 設定ファイルとして $HOME/.pgsp.yaml に書くこともできます。\ndsn: host='/var/run/postgresql/' user='postgres'起動すると定期的にViewにSELECTを実行します。レコードがなければスピンが回るだけです。\n何らかの処理が走ってViewにレコードが追加されるとViewの内容とプログレスバーが表示されます。Viewの内容はTerminalの表示域によって変わるようになっています。\nまた、Viewは処理が終わるとレコードが削除されますが、pgspでは少しの間（デフォルトで10秒）表示し続けるようになっています。この時間は -a --AfterCompletionにより調整できます。\n10分経過まで表示しておきたい場合は以下のようにします。\npgsp -a 600 更新間隔は-i --Intervalによって指定できます（デフォルトは 0.5秒)。処理によってはすぐに終わってしまうので、0.5秒間隔だと、実際には処理が行われていたにも関わらず捕捉出来ない場合があります。その場合は更新間隔を0.1秒等にしてみてください。\n逆に負荷が気になる場合は1以上に設定すると良いでしょう。\nBubble Tea CLIツールの表示はBubble Tea を使用しておこなっています。\nBubble TeaではTerminal上で、その場で表示するアプリケーションが簡単に作成出来るようになっています。その例でもあるプログレスバーをシンプルに利用しています。\nまた、Terminal全体を使用してのアプリケーションも作成出来るため、pgspでも-f --fullscreenオプションによりTerminal全体を表示できるようになっています。\nfullscreenで表示した場合は起動前の表示内容はそのまま、別途別のコンソールが開かれ、終了後は元の画面に戻ります。お好みで使い分けてください。\n",
    "description": "",
    "tags": [
      "pgsp",
      "PostgreSQL",
      "bubbletea"
    ],
    "title": "pgsp",
    "uri": "/blog/pgsp/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Pgsp",
    "uri": "/tags/pgsp/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Pgsp",
    "uri": "/categories/pgsp/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.9.0をリリースしました。 リリースのページから各バイナリがダウンロードできます。\nJSONに対してjq式でフィルタを掛けられるようになりました。 JSONに対してtrdsqlでは最初のオブジェクトや配列をテーブルとみなして処理します。 JSONは階層構造に出来るため、その中のオブジェクトをテーブルとしたい場合にはSQLのJSON関数を使うか、jqを使用してフィルタリングしてパイプで受け取る等の処置が必要でした。\nこれが面倒だったため、JSONファイルに対してjq式を書けるようにしました。\nこの実装にはgojqを利用しています。\n例えば以下のようなJSONファイルがあった場合に、通常のtrdsqlでは menuカラムしかありませんでした。\n{ \"menu\": { \"id\": \"file\", \"value\": \"File\", \"popup\": { \"menuitem\": [ { \"value\": \"New\", \"onclick\": \"CreateDoc()\" }, { \"value\": \"Open\", \"onclick\": \"OpenDoc()\" }, { \"value\": \"Save\", \"onclick\": \"SaveDoc()\" } ] } } }ファイル名に追加してjq式を書くことで以下のようにmenuitemに対してSQLを書けるようになります。\ntrdsql -oat \"SELECT * FROM menu.json::.menu.popup.menuitem\" +-------+-------------+ | value | onclick | +-------+-------------+ | New | CreateDoc() | | Open | OpenDoc() | | Save | SaveDoc() | +-------+-------------+これによりjqコマンドは必要なくなり、複数のファイル又は一つのJSONファイルの中の複数のテーブルを使用できるようになります。\njq式は非常に強烈でSQL相当のこともjq式で出来てしまいます。SQLでやるかjq式でやるかはお好みですが、適正を考えるのが良いと思います。 またjq式を書く場合はjq式をダブルクオートでくくる必要があるかもしれません。 \"SELECT * FROM menu.json::\\\".menu.popup.menuitem\\\"\" のようにエスケープと組み合わせます。\ntrdsqlのjson出力は中身がjsonであればjsonとして扱うようになっているため、以下のように-ojson \"SELECT * FROM jsonファイル名::(jq式)とするとjqの代わりにもなります。\ntrdsql -ojson \"SELECT * FROM menu.json::.menu\" [ { \"id\": \"file\", \"popup\": { \"menuitem\": [ { \"onclick\": \"CreateDoc()\", \"value\": \"New\" }, { \"onclick\": \"OpenDoc()\", \"value\": \"Open\" }, { \"onclick\": \"SaveDoc()\", \"value\": \"Save\" } ] }, \"value\": \"File\" } ]JSONの数値をfloat64にマッピングされていたのを修正 以下のような大きな数値が入ったJSONが、goのjson の実装としてfloat64にマッピングされていました。そのためJSONを介すと指数表記になったりして、嬉しくないことがありました。\n{ \"float\": 1000000000 }trdsql \"SELECT * FROM float.json\" 1e+09 https://golang.org/pkg/encoding/json/#Decoder.UseNumber を有効にして Number として扱われるようにしました。\nTSV,PSVを拡張子として認識するように追加 tsvやpsvという拡張子のファイルだった場合は、tsvはTAB区切りのCSV、psvはパイプ(|)区切りのCSVとして扱うようにしました。区切り文字のオプションを付けなくてもよくなります。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.9.0",
    "uri": "/blog/trdsql_090/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.9.0をリリースしました。 Terminal PAGER releases ov v0.9.0\nv0.8.9をプレリリースバージョンとしてリリースしていましたが、正式にfollowモードを追加したバージョンとして v0.9.0をリリースしました。\nfollowモード、follow-allモード followモードはtail -fのようにファイルが追記されたら自動で読み取って表示します。lessではless +Fで実現されています。 ログの監視に使われることが多いです。\nov --follow-mode /var/log/syslogfollowモードで複数のファイルを指定することも出来ますが、ovでは複数のファイルを別々のドキュメントとして管理して、 ‘]‘と’[‘で切り替えるようになっています。表示しているファイル以外が更新されていても裏側で読み取られているので気づくことが出来ません。\nそこで、動作はfollowモードに似ていますが、最後に更新があったファイルに切り替えるfollow-allモードも追加しました。\nov --follow-all /var/log/syslog /var/log/auth.logのようにすると最後に更新されたファイルに自動で切り替わります。\nfollowモードとfollow-allモードは起動後でもctrl+fやctrl+aによりモード切り替えが可能です。\nexecモード execモードはovの--exec に渡されたコマンドを実行して、stdout/stderrを表示します。 コマンドを実行した結果をパイプによりページャーで表示させるのが一般的ですが、stdin(標準入力)は一つしか無いので、stdout/stderrどちらかを表示か両方を一つにリダイレクトして（混ぜて）表示する必要があります。\n例えばmakeコマンドでは、そこから更に複数のコマンドが呼ばれるためstdoutとstderr両方に多く出力されるため見づらい場合があります。\nそのような場合にexecモードで実行すると簡単にエラーと通常出力を分けて見ることができます。その際にfollow-allモードも一緒に指定するとエラー時に気づきやすくなります。\nov --follow-all --exec -- make -j2execオプションの後に(--)を付けるとそれ以降はovのオプションとは解釈されません（この例ではmakeのオプションと解釈されます）。\nスタイルカスタマイズの追加 検索のハイライトとカラムモードのハイライトをカスタマイズ出来るようにしました。 ~/.ov.yamlに以下のように指定できます。\nStyleSearchHighlight: Foreground: \"gold\" Reverse: trueいくつかのモードを束ねて切り替えるview-modeの選択の追加 ページャーとして汎用的に使えるようになってきたのでファイル形式によっていくつものモードを変更したい場合が出てきます。あらかじめ ~/.ov.yamlに以下のようなModeを登録しておくと起動後にpを押してpsqlやMySQLと打つことでこれらのモードを束ねて切り替えることを出来るようにしました。\nMode: psql: Header: 2 AlternateRows: true ColumnMode: true LineNumMode: false WrapMode: true ColumnDelimiter: \"|\" MySQL: Header: 3 AlternateRows: true ColumnMode: true LineNumMode: false WrapMode: true ColumnDelimiter: \"|\"過去のバージョン v0.9.0 follow,follow-all,execの各モードを追加、改善。検索とカラム選択のスタイルカスタマイズを可能にしました。 v0.8.9 (pre)follow-mode,follow-all-modeの追加 v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.9.0",
    "uri": "/blog/ov_090/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.8.1をリリースしました。 Terminal PAGER releases ov v0.8.1\n文字の単位をCode point から Grapheme clusterに変更しました。\nGoではruneがCode point単位で文字として数えます。Unicodeでは結合文字等があり、1Code pointが１文字ではない場合があります。1文字ではなくても元の文字の後に置けば良いので、文字数が変わる以外は通常それほど意識しなくても良い場合がほとんどです。\nただし端末に表示する場合のような文字幅が固定長の世界では、次の文字が0,1,2幅先なのかを決める必要があります。これまでCode pointに合わせて表示していたため🇯🇵のような文字は、端末では「JP」（フォントによりますが点線でそれぞれ囲まれた文字）のように表示されていました。そのため２文字で表示されることがありましたが、これからは1文字幅として扱うようにしました。\n現在だとechoのように端末に任せて表示すると２文字幅で、ovで表示すると「J」のように表示され、文字が欠けてしまっているように見えます。これは端末側が対応して🇯🇵が表示出来るようになっても文字幅がズレずにそのまま表示されるようになるための対応です。端末側が対応するまではechoとの結果がズレてしまいますが、どちらが正しい仕様かを考えた結果先行して実装することにしてしまいました。 ただ、いまだに絵文字の結合に対応して表示できる端末が見つからないのが問題点です…\n過去のバージョン v0.8.1 文字の単位をCode point から Grapheme clusterに変更しました。 v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.8.1",
    "uri": "/blog/ov_081/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql v0.8.0をリリースしました。 リリースのページから各バイナリがダウンロードできます。\nContextを追加しました。 コマンドでは、killシグナルによって終了するので、変更はないですが、内部的にContextによるキャンセルを出来るようにしました。パッケージ使用する場合にプロセスの終了をせずにキャンセルする処理が書きやすく成ります。\nJSON出力でJSONオブジェクトだった場合にjson.RawMessageで返すようになりました。 JSONは入れ子で配列、オブジェクトを入れられますが、これまでのtrdsqlではフラットな文字列として扱うため、JSONの入れ子構造を作ることが出来ませんでした。 json.RawMessageとして返すことで、SQLのJSON関数でJSON化した列をJSONとして扱えるようになりました。\nJSON出力時にオブジェクトの順序が保持されるようになりました。 JSONのオブジェクト{\"a\": \"x\", \"b\", \"y\"}が並んだときには順序は無いことになっています。そのため、{\"a\": \"x\", \"b\", \"y\"}と{\"b\", \"y\",\"a\": \"x\",}は同じものです。 そのため、trdsqlでJSONやJSONL出力するときに \"SELECT a,b FROM test.json\"のようなSQLでもJSONに変換された時点でaとbの順序は不定でした。 しかしながら、不便な場合があるのでこの順序を守るようにしました。\n~(tilde) を $HOMEに展開するようにしました。 ~/test.csv　などの ~(tilde) の指定は通常shellがおこなうため、\"SELECT * FROM ~/test.csv\"のようにした場合は~(tilde)が展開されませんでした。trdsqlではファイル名だった場合に自前で置き換えするようにしたので展開されることになります。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql v0.8.0",
    "uri": "/blog/trdsql_080/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.8.0をリリースしました。 Terminal PAGER releases ov v0.8.0\nこのバージョンからtcellをv2にアップグレードしました。 スタイルらへんの非互換があるためv2になっていますが、そこまで大きくは変わっていません。\nWindowsターミナルでキーバインドに大文字を指定しているキーが効かない問題を修正しました。 他の端末では「Shift+a」は「A」になるのですが、Windowsターミナルでは「Shift+A」でイベントが発生するので、大文字のときには「Shift」が押されていてもイベントを取得するようにしました。\nドキュメントを追加・閉じるイベントを追加しました。追加は通常使用できませんが、閉じるは「Ctrl+k」で閉じるようになりました。\nconfigとオプションを指定していた場合にオプションが優先されない問題があったのを修正しました。\noviewer パッケージ を使用できるように内部的にも修正をしています。\n過去のバージョン v0.8.0 tcell v2にアップグレードしました。 v0.7.1 交互に行スタイル効果適用の行がズレていたので修正 v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.8.0",
    "uri": "/blog/ov_080/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Go",
    "uri": "/tags/go/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Go",
    "uri": "/categories/go/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "概要 goのTUIについての2020年の最終更新版です。\ngoでTUI(text user interface)を作成する場合にライブラリを使用するのが一般的です。\ngoのTUIライブラリはだいたい以下に分類されます。\ntermbox-go系 tcell系 bubbletea系 その他 goのTUIライブラリはtermbox-go系、tcell系の利用が多かったですが、彗星のごとくbubbleteaが登場しました。\nbubbleteaはThe Elm Architectureに基づいて作られているというフレームワークで、追加のコンポーネントとしてbubblesもあり、もう一つの系統として選択肢になると思います。\nTUIライブラリを謳っている場合は、だいたい上記3つを元に実装されている場合が多いです。\nTUIはエスケープシーケンスを使用すれば、ライブラリを使用しなくても実現できますが、端末によりエスケープシーケンスが変わっていたりするので、マルチプラットフォームで動作するのは難しくなります。 そのため、独自に一から作成するよりは、これらのライブラリの上に便利な機能を足す形になります。\ntermbox-go系 termbox-goは、老舗で現在も多く使われていますが、開発は停滞傾向で、termbox-goにもそれほど保守しない方向だと書かれています。\ntermbox-goを使用して、より高度なウィジットを実装したライブラリにgocuiがあります。\ntermbox-go gocui termui termbox-goのimported by tcell系 tcellは、termbox-goよりも新しくtermbox-goを意識して開発され、今も開発も続いています。 tcellは基本的な機能しか提供しませんが、tcell/viewsには、少し高度なウィジットがあります。\nまた、より高度なウィジットを実装したライブラリとしてtviewがあり、よく使用されています。また、そこからForkしたcviewも候補に入れておくと良いかも知れません。\nさらに元々termbox-goを使用していたgocuiをtcellに変更したawesome-gocui/gocuiも開発されています。\ntcell tcell/views tview cview cbind gowid goban awesome-gocui/gocui tcellのimported by bubbletea系 端末全部を使用するモードしかないtermbox-goとtcellと違い彗星のごとく現われたbubbleteaは現在のプロンプトから対話するような、ちょっとしたプログラムから端末全部を使用するTUIまでサポートしています。\n既に例が豊富に用意されていて、十分に実用に耐えるように思います。\nbubbletea bubbles bubbleteaのimported by その他 termbox-goやtcellは、端末画面をまるまる使用することを前提に作られています。起動すると現在の端末画面は消えて（終了時に戻すことは可能）、新しい画面が表示されます。\n現在のshellプロンプトで動作するような対話型プログラムの場合は、termbox-goやtcellでは作ることはできないので、bubbletea系か別のライブラリや自前で実装することになります。\n別のプログラムとしては、対話型のライブラリとして go-promptやlinerがあります。\nまた、コンソール上の表示を助けるツールとして色を付けたり、その行のまま表示を変えるプログレスバー的な表示をするライブラリがあります。\nどれを選択すべきか？ 2020年12月現在、端末全体を使用する以外の使用の可能性がある場合は、bubbleteaを使用するのが良いと思います。端末全体を使用するアプリケーションを開発するなら、tview とbubbleteaで、例を見ながらどちらを使用するか決めるのが良いでしょう。\n",
    "description": "",
    "tags": [
      "go",
      "tui",
      "tcell",
      "bubbletea"
    ],
    "title": "goのTUIについて2020年最終版",
    "uri": "/blog/go_tui2020/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Tcell",
    "uri": "/tags/tcell/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Tui",
    "uri": "/tags/tui/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Tui",
    "uri": "/categories/tui/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.7.0をリリースしました。 Terminal PAGER releases ov v0.7.0\nPAGER=ov としても問題なく使えるバージョンになっていると思います。\nスタイルカスタマイズを変更しました。 元々は、ヘッダーの色、行の交互表示の背景色、重ね打ちの色、重ね内下線の色を設定ファイルにより指定出来るようにしていましたが、これらの項目全体のスタイルを指定できるようにしました。\nそれぞれ、StyleHeader、StyleAlternate、StyleOverStrike、 StyleOverLineという項目名について、以下のスタイルを指定できます。\nForeground、Background には色名。 Bold, Blink, Dim, Italic, Underline には true / false(Boolean)。 以下のように指定できます。\nStyleHeader: Background: \"gray\" Foreground: \"red\" Bold: true Italic: true Underline: trueov.yaml をコピーして変更していくと良いと思います。\nまた、lessのキーバインドに近づけた ov-less.yaml をアップしておきました。 lessに慣れている方はこちらを使用すると移行がしやすいと思います。\nページアップ、ページダウンの移動改善 1行を折り返さない表示の場合は、表示領域の高さ＝行数なので、+-するだけで問題なかったですが、 折り返す場合は、表示領域の幅により表示できる行数が変わり、スクロール時にはさらに行の途中から表示する必要があったりするので、 これまでページアップ、ページダウンは正確に1ページではありませんでした。\n今回はその計算の実装をやり直しました。そのため、1行が非常に長く画面いっぱいになる場合でも、ページ単位の移動で、その途中の表示からちゃんと表示されるようになりました。 また1行が非常に長い場合にパフォーマンスが落ちるのを少し改善しました。元々の実装の仕方により、1行が長すぎる行の効率はあまり良くありません。\n過去のバージョン v0.7.0 スタイルカスタマイズの改善 v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.7.0",
    "uri": "/blog/ov_070/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Order By",
    "uri": "/tags/order-by/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "きっかけ tom__boさんが書かれた8.0.22でのprepared statementの挙動変化 で、ORDER BY に列番号を指定する問題に注目が集まりました。\nその中で紹介されていた、\nFor a prepared statement of the form SELECT expr1, expr2, … FROM table ORDER BY ?, passing an integer value N for the parameter no longer causes ordering of the results by the Nth expression in the select list; the results are no longer ordered, as is expected with ORDER BY constant.\n「the results are no longer ordered, as is expected with ORDER BY constant.」を見て？？なったので、ちょっと調べてみることに。\nSQLのORDER BY SQLでは「ORDER BY」に列名を指定して出力順をソートさせるのが一般的な使い方です。\nSELECT * FROM test_table ORDER BY c1; 1,Orange 2,Melon 3,AppleSELECTのリストに含まれていなくても列名は指定できます。\nSELECT c2 FROM test_table ORDER BY c1; Orange Melon Appleさらに列名だけでなく「式」も使用できます。\nSELECT c1%2, c1, c2 FROM test_table ORDER BY c1%2; 0,2,Melon 1,1,Orange 1,3,AppleORDER BYの列番号指定 そして、厄介なのはここからです。ORDER BYは列番号を使用できる実装が多く存在します。 これは、一旦SQL-92で標準に入った（その後削除されたらしい）ので、大抵の実装では使えてしまいます。\n去年調べたのでhttps://t.co/4qWdiQfjVs\n追加でぶら下げておきます。\nORDER BY で列番号を書けるのはSQL-92まで標準でSQL-99で廃止されたけど、多くの実装ではまだ書ける。\n原本は見れてないですが、https://t.co/FhqxehNW0g\n等にも記述あり。\n— Saito Noboru (@noborus) February 27, 2020 SELECT c1,c2 FROM test_table ORDER BY 1; // c1でソートされる 1,Orange 2,Melon 3,Apple使えてしまいますが、大抵は非推奨になっています。混乱をもたらしますし、実装的にも厄介そうです。 列番号と「式」が使えるようにするには「式の結果」と列番号は別にしないとなりません。\nつまり\nSELECT c2 FROM test_table ORDER BY 2;と\nSELECT c2 FROM test_table ORDER BY 1+1;は別物になるわけです。そして後者は1+1の結果（全部の行が同じ結果になるのでソートされない）でソートと考えればスッキリします。\nSELECT 1+1, c2 FROM test_table ORDER BY 1+1; 2,Orange 2,Melon 2,ApplePostgreSQL、MySQL、SQLite3でしか試していませんが、だいたい同じ挙動になるのではないかと思います。\nそして、無い列番号を指定した場合はエラーとなり、式で解釈された場合はエラーとならない訳です。\nSELECT c2 FROM test_table ORDER BY 4; Error 1054: Unknown column '4' in 'order clause'SELECT c2 FROM test_table ORDER BY 4+0; Orange Melon Appleしかしながら、PostgreSQLとMySQL、SQLite3ではちょっと挙動が違う場合があります。 整数値以外の値（文字列等）定数を入れた場合には、PostgreSQLでは「non-integer constant」でエラーになりますが、MySQL、SQLite3では式と同じ扱いになります。\nSELECT c2 FROM test_table ORDER BY '1'; ERROR: 42601: non-integer constant in ORDER BYこれも式として解釈されるようにすれば、PostgreSQLでも同じ挙動になります。\nSELECT c2 FROM test_table ORDER BY '1'||''; Orange Melon Apple動作を推測するに、ORDER BY は、まず列番号かどうかを判別して列番号ではないと解釈したら、通常の（他のところでも使える）式の評価に移るのでしょう。\nその際、恐らくPostgreSQLでは、ORDER BY '1'や ORDER BY 'name'を間違って入れた人がいて「ソートされない？？ 」となって、 こんなの入れる訳ないからエラーにしてよ！というツッコミがあったのでしょう。 ← 勝手に推測\nまとめ ということで、最初の 8.0.22でのprepared statementの挙動変化 は「prepared statement」によって列番号で解釈していたのを式評価になったと考えれば納得できます。\nしかし、そうすると「the results are no longer ordered, as is expected with ORDER BY constant.」はちょっと誤解を招くと思います。 実際、誤解しましたし。 はい。ぱっと見 「ORDER BY 2」が効かなくなったのかと思って確かめたら、さすがにそんなことはなかったので、意味がわからなくなって'2'にしたら通ったので、これなのかなと思いました。\n— Saito Noboru (@noborus) October 30, 2020 つまり、これは「列番号」ではなく「列番号と解釈されない固定値」（しかし直接、整数を指定すると列番号と解釈されちゃう）ということではないかと。\n",
    "description": "",
    "tags": [
      "sql",
      "order by"
    ],
    "title": "SQLのORDER BY 列番号と式",
    "uri": "/blog/sqlorder/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Cbind",
    "uri": "/tags/cbind/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "cbindとは？ cbindはtcellのキーイベントとイベントハンドラを結びつけるライブラリです。\ntcellのキーイベント tcell ではキー入力がイベントの１つとして取得できます。 tviewでもtcellのイベントを使用しているので、同じ様にイベントとして取得します。\ntcellのキーイベントを取得するのは以下のようにswitch caseでキーを判別して、イベントハンドラを呼び出すのが一般的です。\nev := screen.PollEvent() switch ev := ev.(type) { case *tcell.EventKey: switch ev.Key() { case tcell.KeyEscape: close(quit) return } case tcell.KeyEnter: action() return }ここのtcell.KeyEscapeは constの数値として定義されています（キーボードに存在する英数字などの文字はruneで入ってきます）。 キー割り当てが少ないうちは、このまま追加していけば機能を増やせるので分かりやすいですが、キー割り当てが多くなってくると以下のような問題が出てきます。\n修飾キー(CTRL、ALT…)が押された場合に動作が変わる場合はさらに分岐する キー割り当てをドキュメント化するのが大変になる キー割り当てのヘルプが必要になる キー割り当てを人によって変更したくなる ドキュメント化やヘルプはコードで実装した後、手間を掛けて書いていけばなんとか解決できますが、キー割り当ての変更に対応するには、元のままのコードでは不可能です。\ncbindを使用 そこで使用したいのがcbindです。\ncbind は Set()でキーの文字列といイベントハンドラを結びつけて登録できます。 実際にキーイベントが起きたら、cbindに任せれば登録されていたイベントハンドラが実行されることになります。\n実際の使用例です キーの登録は、まずcbind.NewConfiguration()をしてConfigurationを作成します。 そのConfigurationにキー文字列とハンドラをSet(\"Alt+s\", handleSave)のように登録します。 または、Decodeでイベントキーに変換して、SetRuneまたはSetKeyで登録します。\n実際に登録するときには、キー文字列（Alt+s等）とイベントハンドラ（func）を直接結びつけるのではなく、アクション名（文字列）を介しておくと、ヘルプや設定ファイル化するときに便利です。\nアクション名とキー文字列のマップ(keyBind)とアクション名とイベントハンドラのマップ(actionHandlers)をあらかじめ定義しておいてsetKeyBindで登録しています。\nconst ( // アクション名 actionQuit = \"quit\" ) var keyBind = map[string][]string{ // アクション名に対してキー文字列をマッピング（キー文字列は複数可能） actionQuit: {\"q\", \"ctrl+q\"}, } var actionHandlers = map[string]func(){ // アクション名に対してイベントハンドラをマッピング actionQuit: handleQuit, } // 終了のイベントハンドラ var quit = make(chan struct{}) var handleQuit = func() { close(quit) } func setKeyBind() (*cbind.Configuration, error) { c := cbind.NewConfiguration() for a, keys := range keyBind { // キーバインドのアクション名からイベントハンドラに変換 handler := actionHandlers[a] if handler == nil { return nil, fmt.Errorf(\"[%s] unknown action\", a) } for _, key := range keys { if err := c.Set(key, wrapEventHandler(handler)); err != nil { return nil, fmt.Errorf(\"failed to set keybind: %s\", err) } } } return c, nil } // func(*tcell.EventKey) *tcell.EventKey という形式のため、 // 引数、返り値を無しの関数を登録するためのラップ関数 func wrapEventHandler(f func()) func(_ *tcell.EventKey) *tcell.EventKey { return func(_ *tcell.EventKey) *tcell.EventKey { f() return nil } }keyBindがマップになっているのでアクション名に対するキー文字列を（設定ファイル等により）変更するだけで、キーバインドの変更が簡単に出来るようになります。\nイベントハンドラの実行はcbindのCaptureにイベントを渡せば登録してあるイベントハンドラが実行されます。\nev := screen.PollEvent() switch ev := ev.(type) { case *tcell.EventKey: c.Capture(ev) }全体のソース package main import ( \"fmt\" \"log\" \"strings\" \"code.rocketnine.space/tslocum/cbind\" \"github.com/gdamore/tcell/v2\" \"github.com/mattn/go-runewidth\" ) const ( actionQuit = \"quit\" ) var keyBind = map[string][]string{ actionQuit: {\"q\", \"ctrl+q\"}, } var actionHandlers = map[string]func(){ actionQuit: handleQuit, } var quit = make(chan struct{}) var handleQuit = func() { close(quit) } func setKeyBind() (*cbind.Configuration, error) { c := cbind.NewConfiguration() for a, keys := range keyBind { handler := actionHandlers[a] if handler == nil { return nil, fmt.Errorf(\"[%s] unknown action\", a) } for _, key := range keys { if err := c.Set(key, wrapEventHandler(handler)); err != nil { return nil, fmt.Errorf(\"failed to set keybind: %s\", err) } } } return c, nil } func wrapEventHandler(f func()) func(_ *tcell.EventKey) *tcell.EventKey { return func(_ *tcell.EventKey) *tcell.EventKey { f() return nil } } func main() { screen, err := tcell.NewScreen() if err != nil { log.Fatal(err) } if err = screen.Init(); err != nil { log.Fatal(err) } defer screen.Fini() c, err := setKeyBind() if err != nil { log.Fatal(err) } // Start application. str := fmt.Sprintf(\"[%s] %s\", strings.Join(keyBind[actionQuit], \",\"), actionQuit) setContents(screen, 0, 0, str, tcell.StyleDefault) screen.Show() // Main routine. go func() { for { ev := screen.PollEvent() switch ev := ev.(type) { case *tcell.EventKey: c.Capture(ev) } } }() \u003c-quit } func setContents(screen tcell.Screen, x int, y int, str string, style tcell.Style) { for _, r := range str { screen.SetContent(x, y, r, nil, style) x += runewidth.RuneWidth(r) } }cbindの使用例 pkg.go.devのImported Byに作者の方が実際に使用している例があるので、そちらを参考にすると良いでしょう。\nまた、拙作ovでもcbindを使用して、キーバインドをカスタマイズ可能にしています。こちらもも参考にしてみてください。\n履歴 2022/6/23 tcell/v2を対象に変更 ",
    "description": "",
    "tags": [
      "cbind",
      "tcell",
      "go",
      "tui"
    ],
    "title": "tcell/tviewでTUIを作るならキー割り当てにcbindを利用しよう",
    "uri": "/blog/cbind/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.6.2をリリースしました。 releases ov v0.6.2\nv0.6.0でマウスサポートを追加しました。 元のマウスの動きは、ov側では制御せずにターミナル側のマウス処理にまかせていました。しかしそれでは、選択してコピーする時に改行コードが含まれないでコピーされるため、複数行のコピーに問題がありました。\nマウス制御を実装することで、複数行のコピーがちゃんと複数行としてコピーされるようになります。ただ、goでクリップボードを制御するのは、難しくLinuxでは外部コマンドを使用するライブラリを使用しています。\nv0.6.1はv0.6.0の細かなバグの修正バージョンです。 v0.6.2で検索のキャンセルができるようになりました。 大きなファイルで検索をかけると時間がかかる場合があります。そのときにキャンセル（デフォルトでCtrl+c)を押すと、検索がキャンセルされすぐに制御が戻ります。\nまた、検索速度自体を速くしました。検索文字列が正規表現のメタ文字を使用していない場合は、正規表現検索ではない検索をします。正規表現よりも高速に検索できるため、通常の文字列を入れて検索するときは、かなり高速になっています。\n過去のバージョン v0.6.2 検索の高速化とキャンセル処理の追加 v0.6.1 細かな修正バージョン v0.6.0 マウスサポート v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.6.2",
    "uri": "/blog/ov_062/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.5.0をリリースしました。 releases ov v0.5.0\nこちらには書いていませんでしたが、0.2.0リリース以降に以下のリリースをしていました。\nv0.3.0 v0.3.1 v0.4.0 v0.5.0 これまでの変更で内部的な修正を多くおこない v0.5.0では複数のファイルを別々のドキュメントとして開くように変更しました。\nこれまで ov *.txt は cat *.txtと同じようにファイルを繋げて表示していましたが、それぞれ独立して開いてドキュメントの切り替えで移動するようになっています。\n1つのviewに対して複数のドキュメントを切り替えて使えるように内部的な修正をしたため、helpの表示、debug logの表示が可能になり、v0.5.0では、複数ファイルの開き方を変更するまでになりました。\nまた、安定バージョンとは言えませんが、ライブラリとしても使用可能になっています。\nライブラリの使用の仕方としては、サンプル がありますが、以下のようにOpenしてRun()で使用します。ページャーのライブラリなので、Run()の後は終了キーを押すまで返ってきません。goroutineで動かして、動いているページャーに対して動作を変更することが可能ですが、まだ仕様が落ち着いてないので、無茶をすると動かなくなる場合があります。\npackage main import ( \"github.com/noborus/ov/oviewer\" ) func main() { ov, err := oviewer.Open(\"main.go\") if err != nil { panic(err) } if err := ov.Run(); err != nil { panic(err) } }過去のバージョン v0.5.0 複数のドキュメントを開く方法を変更 v0.4.0 ヘルプ画面を追加 v0.3.1 位置をマークする機能を追加 v0.3.0 入力の改善 v0.2.1 色をカスタマイズ可能にする v0.2.0 検索の改善 v0.1.3 行番号モードを追加 v0.1.2 Homebrewパッケージの追加 v0.1.1 パッケージ自動更新の調整 v0.1.0 ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5 現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.5.0",
    "uri": "/blog/ov_050/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.2.0をリリースしました。 releases ov v0.2.0\n検索を正規表現対応にしました 検索を正規表現対応にしました。\n検索入力を改善しました。カーソルを移動でき、削除、挿入できるようにしました。\nバックスペースと重ね打ちに対応しました ^Hによるバックスペースに対応しました。\na^Ha のように文字にバックスペースしてからもう一度同じ文字を打つ重ね打ち、とアンダーラインにバックスペースしてから文字を打つ重ね打ちに対応しました。\nこれによりMANPAGERとして使用できるようになりました。\nまとめ これまでpsqlやmysqlで使用される機能を多く追加してきましたが、 通常のPAGERとして使用される必要な機能を実装しました。\n自分で使用する分にはlessの代わりにovを使用しても問題なく使用できています。 ただlessは高機能でオプションが多くあるので、人によっては全然足りないと感じることでしょう。\n過去のバージョン v0.2.0　検索の改善 v0.1.3　行番号モードを追加 v0.1.2　Homebrewパッケージの追加 v0.1.1　パッケージ自動更新の調整 v0.1.0　ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5　現在の基本機能を備えた最初のバージョン 参考 ovの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.2.0",
    "uri": "/blog/ov_020/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "これまで goのTUIについて tcellについて イベント tcellのイベントは、NewScreen()で作成したスクリーンのPollEvent()で取得できます。\nその名の通り、イベントが起こるまでポーリング（polling）して待つので、起こらない限り止まったままになります。\nPollEvent()でイベントが起こったらイベントに応じて処理し、SetContent()でセットし、次のイベントが起こる前にDraw()で描画する。 というのが、実際のメインルーチンになります。\nこのメインルーチンをgoroutineで動かし、終了のイベントがきたらchannelに通知して通知を受信したらFini()を実行して終了するのが一般的な流れです。\nキーイベント イベントの中でも重要でよく使用するのがキーイベントです。 以下のプログラムは左上に打ったキーが表示されます。ESCキー又はEnterキーで終了します。\npackage main import ( \"log\" \"time\" \"github.com/gdamore/tcell\" ) func main() { screen, err := tcell.NewScreen() if err != nil { log.Fatal(err) } if err = screen.Init(); err != nil { log.Fatal(err) } defer screen.Fini() screen.SetContent(0, 0, '_', nil, tcell.StyleDefault) quit := make(chan struct{}) go func() { for { screen.Show() ev := screen.PollEvent() switch ev := ev.(type) { case *tcell.EventKey: switch ev.Key() { case tcell.KeyEscape, tcell.KeyEnter: close(quit) return case tcell.KeyRune: screen.SetContent(0, 0, ev.Rune(), nil, tcell.StyleDefault) time.Sleep(time.Millisecond * 100) } } } }() \u003c-quit } ev := screen.PollEvent() でイベントを待機して、イベントが起こったらevに入ります。 tcellのイベントはinterfaceで受け取れるので、さまざまなイベントを入れることができます。\nさまざまなイベントが入ってくるのでev.(type)によりイベントのタイプを判別します。 キーイベントは*tcell.EventKeyです。 この判別したときにswitch ev := ev.(type)で、イベントタイプをキャストしてevに入れ直すことで、 case内のイベントでは、evに実際のイベントタイプが渡ります。\nその結果*tcell.EventKeyでは、ev.Key()でキーイベントが取得できるようになります。\nev.Key()ではtcellで定義されているキーが取得できます。通常表示されないような特殊なキー（Escapeキーはtcell.KeyEscapeのように）はここで取得できます。 tcell.KeyEscapeやtcell.KeyEnterを取得して終了処理をしています。\n表示されるようなキーはtcell.KeyRuneで判別できて、ev.Rune()によりruneとして取得できます。 今回は取得したruneをそのままSetContentでセットしています。\nruneとして取得できるのでインプットメソッドで入力した日本語等も確定した後に一文字づつ取得できます。 分かりやすいように表示した後0.1秒Sleepしています。\nイベントのループの前でscreen.Show()をして、実際の描画しています。\nまた、日本語入力だけでなく、コピーペーストで貼り付けてもキー入力として取得できます。 逆に言うと端末側が処理するので、基本的に入力方法は判別できません。\nマウスイベント マウスイベントは端末側が対応している必要がありますが、*tcell.EventMouseで、イベントが取得できます。\ntcellの_demos/mouse.go がよくできているので、そちらを参照するのが良いでしょう。\nリサイズイベント 端末のサイズはリサイズされる場合があります。そうすると端末の全画面を使用しているtcellでは、再描画する必要があります。 その際には、*tcell.EventResizeイベントで、イベントを取得し画面サイズをscreen.Size()で取得して再描画をおこないます。\n",
    "description": "",
    "tags": [
      "tcell",
      "go",
      "tui"
    ],
    "title": "tcellについて2",
    "uri": "/blog/tcell_02/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "SetContent() goのTUIについてで書いたようにtcellのSetContent()は1文字設置していくのでASCIIの範囲内だと簡単ですが、Unicodeの世界では注意すべき点があります。\nまず日本語などの全角幅の文字と半角幅の文字が混在すると全角幅のときには、次の文字は1つとばして設置するといったことが必要になります。\n単純に実装する場合はrunewidth.RuneWidth()を使用すれば、runeの文字幅を0,1,2で返してくれるので、その分xをずらせば表示されます。以下が実装例です。文字列を渡せるsetContents()で処理しています。\npackage main import ( \"log\" \"github.com/gdamore/tcell\" \"github.com/mattn/go-runewidth\" ) func setContents(screen tcell.Screen, x int, y int, str string, style tcell.Style) { for _, r := range str { screen.SetContent(x, y, r, nil, style) x += runewidth.RuneWidth(r) } } func main() { screen, err := tcell.NewScreen() if err != nil { log.Fatal(err) } if err = screen.Init(); err != nil { log.Fatal(err) } defer screen.Fini() setContents(screen, 0, 10, \"あいうえお\", tcell.StyleDefault) screen.Show() quit := make(chan struct{}) go func() { for { ev := screen.PollEvent() switch ev.(type) { case *tcell.EventKey: close(quit) } } }() \u003c-quit }上記では結合文字は無視されて表示されます。結合文字を出したい場合は、文字列をループしている中でruneが結合文字のコード範囲だった場合には、前の文字のcombcに入れた上でSetContent()を実行する必要があります。\nまた、runewidth.RuneWidth()で、0幅と出る文字の中にはタブ（\\t）等、アプリケーションによって判断が変わる文字もあります。\nさらに GoのTUIで表示が崩れる場合で書いたようにgo-runewidthでは、曖昧幅がロケールや環境変数RUNEWIDTH_EASTASIANで変わる文字幅があるので注意が必要です。\nStyle tcellでは、SetContent()の中でスタイルを指定します。\n通常端末ではエスケープシーケンスにより色等を変更しますが、エスケープシーケンスでは色指定した後は別の色指定やリセットするまで、その色が続く仕様でした。\ntcellでは、SetContent()の中でスタイルをtcell独自の値で指定すれば良いので明確です。 色はtcellの定数で定義されているので、エスケープシーケンスよりも扱うのは簡単だと思います。\nたとえば赤い文字で出したい場合は、tcell.StyleDefaultをtcell.StyleDefault.Foreground(tcell.ColorRed)に変更するだけです。\nただし、使用できる色数は端末環境により異なります。16色から24ビットカラーが出せる端末まであり、tcellは24ビットカラーもサポートしています。\n多くの端末で動くことを想定するTUIの場合は16色の範囲内で指定することが多いです。 ただ、16色だと原色が多く使用されるためケバケバしい印象になります。 そこで、端末の環境によっては設定によりパレットを用意して16色の色を変更できるようにしている場合があります。\nこの様に指定してあると16色の中の赤をエスケープシーケンスで指定しても原色の赤とは違う色にして見やすくカスタマイズができるようになっています。\nところが、tcellでは24ビットカラーをサポートしているため、さまざまな赤が出せる一方tcell.ColorRedは原色の赤で表示されます。\nTUIアプリケーションで、それほど多く色を使わない場合はパレットの色を尊重した方が使う人に優しいと思います。その場合は、環境変数TCELL_TRUECOLORをdisableにセットしておくとパレットの方を使用します。\nexport TCELL_TRUECOLOR=disable アプリケーションによってはプログラム内でセットしておくと良いでしょう。\nエスケープシーケンスの解釈 エスケープシーケンスよりもスタイル指定の方が明確になりますが、デメリットもあります。 エスケープシーケンスでは、文字列として渡すことができるため、以下の様にするだけで、一部を赤文字にするといったことができますが、スタイルでは難しくなります。\necho \"白\\e[31m赤\\e[0m白\" また、エスケープシーケンスが含まれた文字列を意図通りの色で表示したい場合やエスケープシーケンスを（\\eは文字幅0と解釈されてもその後の[31mが文字列として表示されてしまうので）取り除く場合はエスケープシーケンスを解釈する必要があります。 残念ながらエスケープシーケンスを解釈してくれる関数は含まれていないので、自分で実装する必要があります。 エスケープシーケンスの解釈自体はそれほど難しくないので、1文字づつ見ていきエスケープシーケンスの開始で処理を入れることで可能になります。\n同様なことをしている処理はいくつかありますが、tviewのansi.goで、エスケープシーケンスをパースしています（こちらは、tviewの記法に変換）。\nまた、拙作のovの中でも解釈してスタイルに変換しています。\n",
    "description": "",
    "tags": [
      "tcell",
      "go",
      "tui"
    ],
    "title": "tcellについて",
    "uri": "/blog/tcell_01/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "概要 ライブラリの状況を鑑みてgoのTUIについて2020年最終版に更新しました。\ngoでTUI(text user interface)を作成する場合にライブラリを使用するのが一般的です。\ngoのTUIライブラリはだいたい以下に分類されます。\ntermbox-go系 tcell系 その他 TUIライブラリを謳っている場合は、だいたい上記2つを元に実装されている場合が多いです。\nTUIはエスケープシーケンスを使用すれば、ライブラリを使用しなくても実現できますが、端末によりエスケープシーケンスが変わっていたりするので、マルチプラットフォームで動作するのは難しくなります。 そのため、独自に一から作成するよりは、これらのライブラリの上に便利な機能を足す形になります。\ntermbox-go系 termbox-goは、老舗で現在も多く使われていますが、開発は停滞傾向で、termbox-goにもそれほど保守しない方向だと書かれています。\ntermbox-goを使用して、より高度なウィジットを実装したライブラリにgocuiがあります。\ntermbox-go gocui termui termbox-goのimported by tcell系 tcellは、termbox-goよりも新しくtermbox-goを意識して開発され、今も開発も続いています。 tcellは基本的な機能しか提供しませんが、tcell/viewsには、少し高度なウィジットがあります。\nまた、より高度なウィジットを実装したライブラリとしてtviewがあり、よく使用されています。\ntcell tcell/views tview gowid goban tcellのimported by その他 termbox-goとtcellはいずれも端末画面をまるまる使用することを前提に作られています。起動すると現在の端末画面は消えて（終了時に戻すことは可能）、新しい画面が表示されます。\n現在のshellプロンプトで動作するような対話型プログラムの場合は、上記2つで作ることはできないので、別のライブラリや自前で実装することになります。\n別のプログラムとしては、対話型のライブラリとして go-promptやlinerがあります。\nまた、コンソール上の表示を助けるツールとして色を付けたり、その行のまま表示を変えるプログレスバー的な表示をするライブラリがあります。\nどれを選択すべきか？ 2020年5月現在で端末全体を使用するアプリケーションを開発するなら、tview が第一候補だと思います。tviewが作ろうとしているアプリに当てはまるかを考えて、足りない機能は、tcellを使用して自分で実装できないか考えます。\nそれでも難しいようであればtermbox-goを検討するのが良いでしょう。\ntviewは豊富なデモの実装例があり、また多く使われているので、それらを見れば使い方は分かっていくと思います。\ntcellによる低レベルな実装 ということで、tviewの使い方は他に任せて、tcellの解説をします。tviewを使う場合もその下層について理解するのは有用だと思います。\n個人的にtcellの一番大事な機能だと思うのはSetContentです。 SetContent()は指定された座標に文字を描画します。\nSetContent( x int, y int, mainc rune, combc []rune, style Style)端末上の左上（0）からx,y座標を指定して、maincにrune（文字）を描画します。 低レベルなので、文字列ではなく1文字1文字を設置します。\n指定するのはgoのruneなので、マルチバイトであっても1文字として指定できます。\nただgoのruneは符号化単位なので、Unicodeの結合文字は別文字扱いになります。その結合文字をcombcのrune配列に追加して表現できます。\nそして、styleには、文字色、背景色、反転等のスタイルをtcellの値で渡します。\nSetContent()を使って端末画面分埋めれば自由に描画ができるわけです。\nただSetContent()を使って描画していくのは、なかなか大変でマルチバイト文字を1文字として扱うことはできますが、日本語等のいわゆる全角幅の文字は次の文字をxを1つとばして置かないと違う文字になってしまいます。\nそのため全角幅を含む文字列を描画する場合はgo-runewidthを使用して、文字幅を調べながら1文字づつ設置していくのが通常の手順になります。\nそして、もう1つ重要なのがイベント管理で、tcellがキー、マウス、リサイズ等のイベントを管理してくれます。そのイベントを受け取ってSetContent()で描画し直せば、論理上アプリケーションが作成できます。\n以下に最小の例をあげます。\npackage main import ( \"log\" \"github.com/gdamore/tcell\" ) func main() { screen, err := tcell.NewScreen() if err != nil { log.Fatal(err) } if err = screen.Init(); err != nil { log.Fatal(err) } defer screen.Fini() for i := 0; i \u003c 10; i++ { screen.SetContent(i, i, 'a', nil, tcell.StyleDefault) } screen.Show() quit := make(chan struct{}) go func() { for { ev := screen.PollEvent() switch ev.(type) { case *tcell.EventKey: close(quit) } } }() \u003c-quit }これを実行すると以下のように表示されます。何かキーを押すと終了します。\n最初の tcell.NewScreen()とscreen.Init()は初期化のお約束で通常はエラーになりません（対応していない端末では、エラーになるかもしれません）。 現在のshellが動作している画面とは別に新しく画面を用意します。\nその後defer screen.Fini()は終了時に画面を元に戻します。Fini()を実行しないで終了するとshellに戻ってから画面が崩れたりします。\nその後からがメインで、screen.SetContent()で文字をずらしながら設置しています。実はこの時点では実際には画面に描画されていなくて、その後のscreen.Show()で、実際に描画されます。\nscreen.Show()を実行するまでにSetContent()を何回実行してもscreen.Show()が実行される時に置かれていた文字が描画されるだけなので、場合によってはイベントが起こる度にscreen.SetContent()で全部をスペースで埋め、その後必要なところにscreen.SetContent()を実行するといったことをおこなっても大丈夫な様になっています。\nイベントは通常イベントを受け取るgoroutineを用意して、終了時はチャンネルで通知して抜けるのが、よくあるパターンです。\nここでは文字をずらしながら書いているため、「a」を全角幅の「あ」に変えても表示されますが、横に文字列として表示するには、次のxを適切に移動させないとなりません。\nそこで、ここでのお約束処理とscreen.SetContent()より高機能な描画ができるウィジットライブラリを利用すると楽にできるようになります。\nということで、なるべく便利ライブラリを使用するのがオススメです。\n",
    "description": "",
    "tags": [
      "go",
      "tui",
      "tcell"
    ],
    "title": "goのTUIについて",
    "uri": "/blog/go_tui/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ov v0.1.3をリリースしました releases ov v0.1.3\n行番号モードを追加しました -nオプションをつけての起動又はGキー（トグル）により行番号モードになります。\n交互の背景色の仕様を少し変更しました 交互の背景色を付けるモードでは、画面の端から端まで色を付けるように変更しました。 これにより空行でも背景色が表示されます。\nステータスの行数を自動更新するようにしました ステータス右側の (0/177) の（177）が行数ですが、行数が多いと起動時に全行を読み取れていないので、「…」と読み取り中の表示がついていました。何らかの操作をした時に、その時点の読み取られた行数を更新していましたが、タイマーでも更新するように変更しました。\n過去のバージョン v0.1.2　Homebrewパッケージの追加 v0.1.1　パッケージ自動更新の調整 v0.1.0　ovにレポジトリ名と構成を変更。deb/rpmパッケージの追加 v0.0.5　現在の基本機能を備えた最初のバージョン 参考 ov - Oviewerの紹介\n",
    "description": "",
    "tags": [
      "ov"
    ],
    "title": "ov v0.1.3",
    "uri": "/blog/ov_013/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "私が作成中のovの紹介です。\n最初Oviewerというレポジトリ名でしたが、コマンド名に合わせるようにovに変更しました。\nインストール ov のリリースからバイナリもダウンロードできますが、今はまだgo getで最新をダウンロードして使うことをオススメします。\n※ 2020/5/11追記。現在は各種パッケージも用意していますので、インストールしやすい方法利用してください。\ngo get -u github.com/noborus/ov cd ov make install 特徴 lessやmoreのようなTerminal pagerです。\n圧縮（gzip, bzip2, zstd, lz4, xz）されているファイルをそのまま表示可能 より良いUnicodeのサポート。ターミナルで表示できる（フォントがあれば）結合文字も表示可能 より良いワイド幅（全角文字）の対応 ヘッダーの行数を指定して固定可能 行の折り返し／折り返さないを表示後に切替可能 1行毎に背景色を付けることが可能 psqlやmysqlからの表示を考慮 終了時に現在の画面の内容を書き出すことが可能 環境変数PAGERに設定して使用しても問題なく使えることを目指しています。\n現在はUTF-8のテキストを対象にしています。\nまた、manのpagerとしては、問題があるので、MANPAGERは別途指定する必要があります。\n※ 2020/5/25 追記 v0.2.0からMANPAGERとしても使用できるようになりました。\n実装の特徴 tcellを使用していて、比較的多くの端末に対応しています。 メモリに溜め込む実装なので、メモリは多く使用します。更新されるログファイルの監視的な用途には向きません。\n使用方法 コマンド名は ov です。\n基本的にはファイル名を指定して起動します。\nov filename 又はパイプを使用して標準入力からの入力を受け付けます。\ncat filename|ov オプションは以下です。オプションの多くは、起動後にキーより切り替え可能です。\n$ ov --help ov is a feature rich pager(such as more/less). It supports various compressed files(gzip, bzip2, zstd, lz4, and xz). Usage: ov [flags] Flags: -C, --alternate-rows color to alternate rows -i, --case-sensitive case-sensitive in search -d, --column-delimiter string column delimiter (default \",\") -c, --column-mode column mode --config string config file (default is $HOME/.oviewer.yaml) --debug debug mode -X, --exit-write output the current screen when exiting -H, --header int number of header rows to fix -h, --help help for ov -n, --line-number line number -F, --quit-if-one-screen quit if the output fits on one screen -x, --tab-width int tab stop width (default 8) -v, --version display version information -w, --wrap wrap mode (default true) 圧縮してあるファイルの対応 元々の作成の動機でもあるのですが、圧縮してあるファイルをそのまま閲覧できます。\nov test.csv.zst 拡張子に関係なくファイルの先頭のマジックナンバーを見て判断しているため、パイプからでも動作します。\ncat test.csv.zst|ov psqlでの使用 psqlから呼び出されるPAGERとしても考慮しています。\npsqlでは環境変数PAGER又は（PostgreSQL Ver.11.0からは）PSQL_PAGERが設定されているとPAGERを使用します。 ~/.psqlrcによりpsql起動時に以下のように環境変数を設定することもできますので、以下のように設定することを推奨します。\n\\setenv PAGER 'ov -H2 -w=f -F -C -d \"|\"'これによりpsqlでは、-H22行の固定ヘッダー、-w=f折り返しをしない、-F終了時に表示していた内容を書き出す（ほぼ、クリアしないと同じ動作）、-C1行毎に背景色を付ける、区切り文字として\"|“を使用という動作になります。\nこれは起動時の動作のため、起動後以下のように切り替えることが可能です（-F は終了時に必ず書く設定なので、-Fを付けずに起動すれば、qで書き出さないで終了（クリアする）、Qで書き出して終了する、というような動作になります。\n折り返し／折り返さない(w) 1行毎に背景色を付ける／付けない(C) 固定するヘッダーの行数指定 (H) 入力モードになるので行数を入力する。\n列モード(c) (d) で指定した区切り文字に囲まれた列として選択できるようになります。選択されている列がハイライト表示されます。 wrap/nowapで動作が変わり、nowrapモードの場合は、選択した列が表示されるように横スクロールします。\n行番号モード(G) (G)で先頭に行番号が表示されます。\nmysqlでの使用 またmysqlから使用されるPAGERとしても同様に使用できます。\nmysql -pager='ov -H3 -w=f -C -d \"|\"' $(HOME)/.my.cnfにPAGERの設定を書いておくこともできます。\n[client] pager=ov -H3 -w=f -C -d \"|\"ヘッダーがあるコマンド出力のページャー たとえば、よく使用するpsで全プロセスを出すと見づらくなりますが、以下のようにすると見やすくなります。\nps aux|ov -H1 -C -w=f Debian/Ubuntuのインストールしているパッケージリストも以下のようにして見ることができます。\ndpkg -l|ov -H5 -w=f -C 起動後にもヘッダーや折り返し、背景色の変更もできるため、とりあえずovに渡してから見やすい表示に変更するといった使い方ができると考えています。\n",
    "description": "",
    "tags": [
      "ov",
      "terminal pager"
    ],
    "title": "ov",
    "uri": "/blog/oviewer/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Terminal Pager",
    "uri": "/tags/terminal-pager/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Ambiguous Width",
    "uri": "/tags/ambiguous-width/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Gnome-Terminal",
    "uri": "/tags/gnome-terminal/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "結論 gnome-terminalを使用している場合は、設定の「曖昧幅の文字(W)」と環境変数RUNEWIDTH_EASTASIANを一致させよう。\nAmbiguous width(曖昧幅) ターミナル上のアプリケーション(TUI)では、GUIと違って文字単位で描画されます。 そして1文字の幅は固定されていて、アルファベットは1文字分とすると日本語などは2文字分使用する、いわゆる半角全角の世界です。 ただし、既にUnicode(UTF-8)が標準となっているので、バイト数と文字幅は関係しないようになっています。\nUnicodeでは幅が決まっている文字がほとんどですが、一部に「Ambiguous; 曖昧」とされている文字があります。\n以前は英語圏のアプリケーションではASCIIの範囲内のみを使用していて「Ambiguous」な範囲の文字を使用するのは、それ以外の地域の人だったため、全角幅で問題になることは無かったのですが、Unicodeの使用が拡大するにつれて英語圏の方が作るアプリケーションでも「Ambiguous」な幅の文字が使用されることが増えてきました。\n特にTUIアプリケーションでは、罫線「┌ ├ ─ ┘等」を使用して枠線を表現することがあります。これが「Ambiguous」な幅として、英語圏では1文字幅で表示できる様になっているため、2文字幅と解釈して表示しようとすると表示が崩れてしまいます。\nターミナル上で罫線を使用したプログラムがズレる場合はこれが原因です。\nそのための対応として、gnome-terminalではPreferencesから「曖昧幅の文字(W)」を半角／全角で変更出来るようになっています。\nこれを半角にすれば、罫線が1文字幅で表示されるため、表示が直ります。\n例えば、psqlの \\pset linestyle unicodeをgnome-terminalで使用するには、ここを半角にしておかないと縦の線が揃わなくなります。\nただし、これはアプリケーションが幅を半角幅と仮定しているのに合わせているだけなので、別のアプリケーションでは合わなくなるといったことが起こります。\ngo-runewidth のAmbiguous width go言語では、１文字がターミナルで半角なのか全角なのかを判断するには、go-runewidthで判断するのがデファクトスタンダードになっていると思います。\ngo-runewidthでは、ロケールに従ってAmbiguousな幅を決定していて日本語を使用している場合(ja_JP.UTF-8等)は、全角（2文字幅）になります。\nこの場合、上記のgnome-terminalで「曖昧幅の文字(W)」を半角にしていた場合は、余分な隙間が空いて表示が崩れたようになります。 LANG=Cでアプリケーションを起動し直してみて表示が正常になる場合は、この「曖昧幅の文字(W)」とgo-runewidthが解釈するロケールに齟齬が起こっていることになります。\ngo-runewideth ではロケールの他に環境変数RUNEWIDTH_EASTASIANによりAmbiguousな幅を変更できますので、gnome-terminalではPreferencesの「曖昧幅の文字(W)」が半角の場合は、環境変数RUNEWIDTH_EASTASIANを0に全角の場合は1に設定しておくとgo言語のTUIアプリケーションの表示の乱れが無くなるのでは無いかと思います。\n",
    "description": "",
    "tags": [
      "runewidth",
      "go",
      "ambiguous width",
      "gnome-terminal",
      "tui"
    ],
    "title": "GoのTUIで表示が崩れる場合",
    "uri": "/blog/runewidth/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Runewidth",
    "uri": "/tags/runewidth/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql 0.7.5をリリースしました。 リリースのページから各バイナリがダウンロードできます。\n圧縮ファイルへの対応を強化 trdsql 圧縮ファイルに書いたように圧縮ファイルのサポートを増やしました。\nまた、圧縮しての出力をできるようにしました。\nファイルへの出力 trdsql outputに書いたように出力ファイルを指定して出力できるようになりました。\n出力ファイル名から出力フォーマットと圧縮フォーマットを推測するのがデフォルトの動作になっています。\nオプションが増加したため、-helpメッセージの出力を見直しました。 以下のようになります。\ntrdsql - Execute SQL queries on CSV, LTSV, JSON and TBLN. Usage: trdsql [OPTIONS] [SQL(SELECT...)] Options: -A string analyze the file but only suggest SQL. -a string analyze the file and suggest SQL. -config string configuration file location. -db string specify db name of the setting. -dblist display db information. -debug debug print. -driver string database driver. [ mysql | postgres | sqlite3 ] -dsn string database driver specific data source name. -help display usage information. -q string read query from the specified file. -version display version information. Input options: -icsv CSV format for input. -id string field delimiter for input. (default \",\") -ig guess format from extension. (default \"true\") -ih the first line is interpreted as column names(CSV only). -ijson JSON format for input. -iltsv LTSV format for input. -ir int number of row preread for column determination. (default 1) -is int skip header row. (default 0) -itbln TBLN format for input. Output options: -oaq enclose all fields in quotes for output. -oat ASCII Table format for output. -ocrlf use CRLF for output. End each output line with '\\r\\n' instead of '\\n'. -ocsv CSV format for output. -od string field delimiter for output. (default \",\") -oh output column name as header. -ojson JSON format for output. -ojsonl JSON Lines format for output. -oltsv LTSV format for output. -omd Markdown format for output. -oq string quote character for output. (default \"\\\"\") -oraw Raw format for output. -otbln TBLN format for output. -out string output file name. -out-without-guess output without guessing (when using -out). -ovf Vertical format for output. -oz string output compression format. [ gz | bz2 | zstd | lz4 | xz ] 今回のリリース 前回のリリースは、要望により出力形式を追加する形でしたが、今回は、まだあまり使用していないであろう圧縮形式のサポートを追加しました。 今回は、「これからこれで使ってみて欲しい」という提案的なリリースです。 出力ファイル名による推測を使用すると煩わしさがないので、「圧縮しておいても良いかな」と思ってもらえるのではないかと思います。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql 0.7.5",
    "uri": "/blog/trdsql_075/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Output",
    "uri": "/tags/output/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "今までは標準出力にのみ出力していましたが、-out ファイル名により、出力ファイルを指定できるようにしました。\n-out ファイル名では出力ファイル名からファイル形式、圧縮形式を推測するモードをデフォルトで有効にしてあります。\n出力ファイル名の拡張子が[.csv,.ltsv,json,jsonl,tbln,md,at,vf,raw]等の出力ファイル形式の拡張子だった場合は自動でその出力形式で出力します。\n以下はLTSV形式で出力します。\ntrdsql -out test.ltsv \"SELECT * FROM testdata/test.csv\" 出力フォーマットを指定した場合は、出力フォーマットが優先されます。以下はjsonl形式で出力されます。\ntrdsql -ojsonl -out test.txt \"SELECT * FROM testdata/test.csv\" 圧縮形式も推測するので、test.csv.gzのようにした場合はCSV形式のgzip圧縮で出力されます。基本的ファイルの拡張子はファイル形式.圧縮形式の順です。\n以下はLTSV形式でzstd圧縮で出力されます。\ntrdsql -out test.ltsv.zst \"SELECT * FROM testdata/test.csv\" 圧縮フォーマットも-oz 圧縮形式で指定した場合はそちらが優先されます。\n例えば、.zstの拡張子を付けたいが圧縮してほしくない（理由はわかりませんが…)の場合は、-out-without-guessを付けて実行して下さい。\n",
    "description": "",
    "tags": [
      "trdsql",
      "output"
    ],
    "title": "trdsql output",
    "uri": "/blog/34_output/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "圧縮ファイルに実行 0.7.4までは gzip(.gz)の圧縮形式のみの対応でしたが、最新のmaster(0.7.5以降の予定)では、gzip(gz)、bzip2(bz2)、zstd(zst)、lz4、xzの圧縮形式に対応しました。\n従来は.gzの拡張子をみて判断していましたが、今回から圧縮形式のファイルの先頭のマジックナンバー（signatureの値）を見て判断するようになりました。そのため、拡張子が何であっても上記の圧縮形式はそのまま読み取ることが出来ます。\n圧縮率にもよりますが、デフォルトレベルのzstdでの圧縮されたファイルをtrdsqlで処理すると、手元のマシンでの処理時間はほぼ変わらないか、少しzstdで圧縮されているファイルのほうが早いくらいです。\n例えば以下のような145MBのファイルに対してzstdで圧縮すると44MBになりました。\n145M worldcitiespop.csv 44M worldcitiespop.csv.zst timeを付けての結果は以下のようになりました。\n/usr/bin/time -p trdsql -ih \"SELECT count(*) FROM worldcitiespop.csv\" real 11.47 user 11.76 sys 0.70 zstd圧縮\n/usr/bin/time -p trdsql -ih \"SELECT count(*) FROM worldcitiespop.csv.zst\" real 9.76 user 11.00 sys 0.37 LTSVファイルでは、同じ内容のCSVファイルよりもファイルサイズが大きくなりますが、圧縮効率は良いので圧縮したときのファイルサイズの差は小さくなります。\n330M worldcitiespop.ltsv 54M worldcitiespop.ltsv.zst 145MBをLTSVにすると330MBのファイルになっていたのが、圧縮するとCSV:44MB、LTSV:54MBになります。\n処理時間は以下のようになりました。\n/usr/bin/time -p trdsql \"SELECT count(*) FROM worldcitiespop.ltsv real 16.72 user 17.41 sys 1.05 /usr/bin/time -p trdsql \"SELECT count(*) FROM worldcitiespop.ltsv.zst\" 3173958 real 13.93 user 16.02 sys 0.55 大きなLTSVファイルはzstdで圧縮しておくのが、サイズ的にも速度的にもおすすめです。\n圧縮して出力 また、圧縮しての出力にも対応しました。 -oz 圧縮形式[gz,bz2,zst,lz4,xz]を指定すると圧縮して出力されます。\ntrdsql -oz gz \"SELECT * FROM testdata/test.csv\" \u003e test.csv.gz trdsql -oz zst \"SELECT * FROM testdata/test.csv\" \u003e test.csv.zst また-out ファイル名ではファイル名から推測して出力する機能があります。\n詳細はファイル名を指定しての出力を参照して下さい。\n",
    "description": "",
    "tags": [
      "trdsql",
      "圧縮ファイル"
    ],
    "title": "trdsql 圧縮ファイル",
    "uri": "/blog/33_compression/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: 圧縮ファイル",
    "uri": "/tags/%E5%9C%A7%E7%B8%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: LOAD DATA INFILE",
    "uri": "/tags/load-data-infile/index.html"
  },
  {
    "breadcrumb": "Top \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Mysql",
    "uri": "/categories/mysql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "前提 LOAD DATA INFILEはMySQLサーバーがファイルを読み取ってデータベースのテーブルにインポートする構文ですが、LOAD DATA LOCAL INFILEはクライアント側のファイル（の内容）をサーバー側に送信してインポートします。\nこのLOCAL指定ですが、セキュリティ上の問題を抱えているため、最近のバージョンだとデフォルトで使用できない設定に変更されたりしています。\nそもそも LOAD DATA LOCAL INFILE の仕組みは、MySQLのLOAD DATA構文を（クライアント側ではパースして解釈しないので）サーバー側に送ってLOCAL INFILEの場合ファイル名をクライアントに伝えて、クライアントがそのファイル（の中身）をサーバー側に送信するようになっています。\nサーバー側からLOAD DATA LOCAL INFILEに書いてあったファイル名とは違うファイル名を伝えられてもそのファイルを送信してしまう可能性があるため、セキュリティのリスクがあります。\nLOAD DATA LOCAL INFILE(go) goのmysqlドライバでは、LOAD DATA LOCAL INFILE supportにあるように mysql.RegisterLocalFile(filepath)やmysql.RegisterReaderHandler(name, handler)という関数が追加されていてセキュリティ上の問題を解決するような拡張がされています。\nmysql.RegisterLocalFile(filepath)は、LOAD DATA LOCAL INFILEを実行する前にあらかじめ送信するファイル名を登録しておいて、登録してあるファイルのみを送信することでリスクを軽減しています。\nmysql.RegisterLocalFile(\"/tmp/test.csv\") db.Exec(\"LOAD DATA LOCAL INFILE '/tmp/test.csv' INTO TABLE test\")また、mysql.RegisterReaderHandler(name, handler)では、あらかじめクライアントプログラム側がファイルを開く等してできたio.Readerインターフェイスを\u003cname\u003eと共に登録しておき、LOAD DATA LOCAL INFILE 'Reader::\\\u003cname\\\u003e' INTO TABLE テーブル名 によりio.ReaderからReadしてサーバー側に送信します。\nmysql.RegisterReaderHandler(\"test\", func() io.Reader { file, err = os.Open(\"/tmp/test.csv\") if err != nil { return nil } return file }) db.Exec(\"LOAD DATA LOCAL INFILE 'Reader::test' INTO TABLE test\")db.Exec(“LOAD DATA LOCAL INFILE”)が実行されるとサーバー側はiLocalInFile(0xfb)のパケットを返して、ファイルの内容を受信するモードになります。\n後は、クライアント側はreadして送信していくだけなので、共通処理になっています。\ngoのmysqlドライバの不満点 上記仕組みに問題自体は無いですが、いざ使おうとすると面倒なところがあります。\nそれは、要求するのがファイル名又はio.Readerハンドラのため、プログラムで生成されたデータは、一旦ファイルに書き出すか、readerが使用できるデータ領域、又はio.Pipeを使用してpipeに書き出す等の工夫が必要になります。\nLOAD DATA INFILEで読める形式のファイルが整っている場合は良いですが、そこから外れた形式を変換する場合は面倒な手間が必要になります。\nまた、mysql.RegisterLocalFile()を使用するときは、データベースドライバのmoduleを直接使用することになり、ここだけ異質になります。 かつ登録するファイルはクライアントプログラムのグローバルな箇所に登録するのも気になります。\n改善の提案 そこで、io.Readerを要求するモードとは別に’Data’を要求するモードを追加するのが良いのではないかと思いました。\ndb.Exec(\"LOAD DATA LOCAL INFILE 'Data::Data' INTO TABLE test\")の様な構文が流れてきたらDataモードとし、以降のdb.Exec(\"\", \"column1\", \"column2\")のデータをLOAD DATA（具体的にはタブ区切りのデータ）としてサーバー側に送ります。 空のdb.Exec()が実行されるとLOAD DATAのDataモードを終了します。\ngoのSQLドライバはPREPARE文をサポートしているので、ExecのSQLクエリの後の引数にパラメーターとして値を渡すことができます。 そのため、通常のExec(“SQLクエリ”, para1, pare2) のインターフェイスをそのまま利用できます。\nもしくはトランザクション内で、\nstmt, err := tx.Prepare(\"LOAD DATA LOCAL INFILE 'Data::Data' INTO TABLE test\")のようにPrepara文でstatementを受け取りstatementに対して、 stmt.Exec(\"column1\", \"column\")のように実行するのが良いかもしれません。\nどちらもINSERT文で実行されていた文を少し書き換えるだけでLOAD DATAを使用することが出来ます。\nということで、上記を試しに実装してみたのが、以下になります。まだPull Request前の状態です。\nhttps://github.com/go-sql-driver/mysql/compare/master...noborus:load_data_of_slice\nまだ問題が残っている可能性がありますが、一応動作します。\n動作するサンプルは以下になります。\n2020-02-15追記 整理してExtension to help use LOAD DATA LOCAL INFILE #1060 という Pull Requestを送ってみました。\n変更内容が元の方向性に沿うものではないので、マージされるのは難しいかもしれません。\nMySQLのLOAD DATAの提案 MySQLのLOAD DATA LOCAL INFILEはセキュリティの問題もあり、今後自分で設定しないと使用できなくなり、いつかは廃止されるかもしれません。\nこの方法であれば、ファイルを開く場合もクライアント側で決定したファイルを開いて送信することになるため、LOCAL INFILEのセキュリティ問題は発生しません。\nLOCAL INFILEの仕組みには問題がありますので使用できない方向にするのは良いと思いますが、上記のようにファイル名を気にせずデータを送信する（LOAD DATA LOCAL DATAのような）構文を追加してLOCAL INFILEの設定と分けて利用できるようにならないでしょうか？\n他の言語ドライバも上記のような（他の言語ではExecインターフェイスに合わせる必要が無ければもっと簡単に）実装できると思います。\n2020-02-13追記 新しいクライアントのMySQL Shellでは、サーバー側が有効（SELECT @@local_infile;が1）でもSQLとしては、 ERROR: 3948 (42000): Loading local data is disabled; this must be enabled on both the client and server sides とエラーとなる。\nその代わりMySQL ShellにParallel Table Import Utility というのがあり、JavaScript mode(\\js)（又はちょっと書式が変わるがPython mode）でimportTableによりパラレルインポートが可能になっている。\nutil.importTable(\"test.csv\", {\"schema\": \"mydb\", \"table\": \"test\", \"dialect\": \"csv-unix\", \"skipRows\": 1, \"showProgress\": true});これは上記マニュアルに書いてあるように LOAD DATA LOCAL INFILEを内部で使用しているため、サーバー側で無効SET GLOBAL local_infile=0にした場合）使用することが出来ない。\nMySQL Shellでは、ファイル名の要求がきても無視されると記述されているので、セキュリティ上の問題は回避されています。 ということで、MySQL Shellでもlocal_infileのセキュリティ問題に影響されて使いづらくなっているのは変更した方が良いと思うのですけど、 （内部的に発行しているのであれば、別の構文が追加されても対応は簡単でしょうし） 今後もこのままでしょうか？\n",
    "description": "",
    "tags": [
      "mysql",
      "LOAD DATA INFILE"
    ],
    "title": "MySQL の LOAD DATA INFILE (go)",
    "uri": "/blog/mysql-load/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsql 0.7.4をリリースしました。 リリースのページから各バイナリがダウンロードできます。\n全ての項目を二重引用符（”）で囲うオプション(-oaq)を追加 今回は、CSV出力に全ての項目を二重引用符（”）で囲うオプション(-oaq)を追加しました。\ngoのencoding/csvはRFC 4180に沿って実装されていますが、必要な項目を二重引用符（”）で囲うようになっていますが、全ての項目を囲う方法は用意されていません。要望はありましたが、却下されています。\ntrdsqlにも要望が以前より来ていましたが、encoding/csvが対応していないので、対応出来ないとして、カスタマイズする方法を提示していました。 今回別の方からも要望が来たので、実装しました。\nencoding/csvでは対応出来ないので、別の方法で実装する必要がありますが、定番と言えるモジュールは無く実装自体は難しくないので、自前で実装することにしました。と言ってもencoding/csvのコードから少し変更しているだけです。\nその際に、関連する箇所を見直して、全体の出力が速くなるように改善しました。多くの出力をする場合でないと違いは出ませんが、手元では317万行(145MB)あるファイルを \"SELECT * FROM 〜\"で出力してみたら、全体で10%ほど高速化していました。\nまたその他に、二重引用符（”）以外の引用符が使用できる(-oq)と改行文字をCRLFに変更する(-ocrlf)を追加しました。 CRLFはRFC 4180にあり、encoding/csvでも対応していたのですが、入れそびれていたので今回入れました。 引用符は変更してしまうとtrdsqlで読めないCSVになってしまうので注意が必要です。普通は使わないと思うのでかなり特殊用途だと思います。\nGitHub Actions でのバイナリ作成に変更 これまで travis-ciでリリース時にビルドしてアップロードしていましたが、GitHub Actionsに変更しました。 途中まではtravis-ciと同様に各環境でビルドしてアップロードしていましたが、crazy-max/xgo(https://github.com/karalabe/xgoのfork版ですが、こちらでないとまだ問題がありました)で、クロスビルドが出来たので、こちらでビルドしてアップロードしています。\ncrazy-max/ghaction-xgoを使用した場合は、ビルドからアップロードまで簡単に出来るようになっていますが、zipでアーカイブしてアップロードしたかったため、Makefileでビルドまでおこないアップロードをおこなっています。\n対応環境数が大幅に増えたため、ワイルドカードでファイルが指定できるAButler/upload-release-assetsを使用してアップロードしています。\narmやmipsは環境が無いので自分では動かして試して見ることが出来ません。問題がありましたらお知らせ下さい。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql 0.7.4",
    "uri": "/blog/trdsql_074/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: CASE",
    "uri": "/tags/case/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "CASE式は、プログラム言語のif文やswitch文のような条件に分岐した処理をおこないます。単純な1を’A’に変換するような場合は、一時的なテーブルとJOINさせたり文字列の書き換えで可能ですが、 範囲を指定してグループ化したい場合はCASE式を使うと便利です。\nCASE式には以下の2つのパターンどちらも使用できます。\nCASEは CASE 式（列) WHEN 値 THEN 結果とCASEの後に式を書いて、WHENが値だけのパターンと CASE WHEN 式 THEN 結果 とCASEの式を省略してWHENに式を書くパターン 必要であれば、ELSE 結果で当てはまらない場合を書き、ENDで式の終わりを示します。\ncase.csv のようなCSVを使用して、scoreが80以上の場合は’A’、30以上の場合は、‘B’、30より下の場合は、‘F’と表示させてみます。\nid,name,score 1,bob,89 2,alice,75 3,dave,23trdsql -ih -oat \\ \"SELECT id,name,score, \" \\ \" CASE WHEN CAST(score AS int) \u003e= 80 THEN 'A' \" \\ \" WHEN CAST(score AS int) \u003e= 30 THEN 'B' \" \\ \" ELSE 'F' \" \\ \" END AS evaluation \" \\ \" FROM case.csv\" +----+-------+-------+------------+ | id | name | score | evaluation | +----+-------+-------+------------+ | 1 | bob | 89 | A | | 2 | alice | 75 | B | | 3 | dave | 23 | F | +----+-------+-------+------------+CASE式は書いた先から評価されます。\nまた式は1つの列をである必要が無いので、WHEN name = 'dave' THEN 'D' という条件を追加することも可能です。\n",
    "description": "",
    "tags": [
      "trdsql",
      "CASE"
    ],
    "title": "trdsql CASE式",
    "uri": "/blog/32_case/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: ROLLUP",
    "uri": "/tags/rollup/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "Window関数により元のファイルの内容に列を追加して、集計結果を出せました。 ただ、人が確認する場合は、集計の結果行が最後に出るほうが確認しやすくなります。\n通常のSQLでも元の内容と集計結果を別々に出してUNIONを使うことで、一つの結果として出すことが出来ますが、一回で済むならばそれに越したことはありません。\nSQLite3ではサポートされていませんが、PostgreSQLとMySQLならばサポートされている文があります。\nROLLUP Window関数でも使用した以下のCSVファイルを使用します。\nid,class,name,score 1,A,bob,174 2,A,alice,248 3,A,carol,163 4,B,dave,289 5,B,eve,157 6,B,flank,272通常のGROUP BYで全体の合計又は、class毎の合計が出せました。 ただし、class毎の合計と全体の合計を出すにはWindow関数を使用して別の列に出していました。\nGROUP BYに ROLLUPを指定することで、両方を出力できます。\nPostgreSQL PostgreSQLでは、GROUP BY 列名の代わりにGROUP BY ROLLUP(列名)を使用することで、通常のGROUP BYに加えて、全体の集計結果を出力します。\ntrdsql -driver \"postgres\" -dsn \"dbname=trdsql_test\" -oat -ih \\ \"SELECT class, SUM(score::int) AS score FROM score.csv GROUP BY ROLLUP(class) ORDER BY class\" +-------+------+ | class | sum | +-------+------+ | A | 585 | | B | 718 | | | 1303 | +-------+------+MySQL MySQLでは、GROUP BY 列名の後に WITH ROLLUPを付けると、通常のGROUP BYに加えて、全体の集計結果を出力します。\ntrdsql -driver mysql -oat -ih \\ \"SELECT class, SUM(CAST(score AS SIGNED)) AS score FROM score.csv GROUP BY class WITH ROLLUP \" +-------+-------+ | class | score | +-------+-------+ | A | 585 | | B | 718 | | | 1303 | +-------+-------+GROUPING SETS PostgreSQLでは、さらに柔軟に出力することができます。\n通常のCSVの内容に追加して、classの小計と全体の合計を出したい場合は、更にグループ化を制御する必要があります。 GROUPING SETSは柔軟なグループ化が可能です。\nGROUPING SETSで id,name,class（つまりid別ですが、nameとclassも出力対象に含めるため、指定します）、class別、総合計（指定なし）の３つのグループ化をして出力すると以下のように、小計、合計が出力できます。\ntrdsql -driver \"postgres\" -dsn \"dbname=trdsql_test\" -oat -ih \\ \"SELECT id, name,class, SUM(score::int) AS score \" \\ \" FROM score.csv GROUP BY GROUPING SETS((class,id,name),(class),()) \"\\ \" ORDER BY class\" +----+-------+-------+-------+ | id | name | class | score | +----+-------+-------+-------+ | 1 | bob | A | 174 | | 2 | alice | A | 248 | | 3 | carol | A | 163 | | | | A | 585 | | 4 | dave | B | 289 | | 5 | eve | B | 157 | | 6 | flank | B | 272 | | | | B | 718 | | | | | 1303 | +----+-------+-------+-------+上記の GROUPING SETSは、ROLLUP(class,(id,name))で簡略化できます。\ntrdsql -driver \"postgres\" -dsn \"dbname=trdsql_test\" -oat -ih \\ \"SELECT id,name,class, SUM(score::int) AS score \" \\ \" FROM score.csv GROUP BY ROLLUP(class,(id,name)) \" \\ \" ORDER BY class\"ROLLUP(class,id,name) とするとidとnameそれぞれで、グループ化してしまうので、同じscoreの行が2行づつ出てしまいます。 idとnameは１つにしつつ、class,(id,name)のそれぞれでグループ化するとGROUPING SETSと同じ意味になります。\nMySQL MySQLでは、GROUPING SETSがないので、class,id毎でWITH ROLLUPにり結果は出せますが、nameを出力することは出来ません。\ntrdsql -driver mysql -oat -ih \\ \"SELECT id,class, SUM(CAST(score AS SIGNED)) AS score \" \\ \" FROM score.csv GROUP BY class,id WITH ROLLUP\" +----+-------+-------+ | id | class | score | +----+-------+-------+ | 1 | A | 174 | | 2 | A | 248 | | 3 | A | 163 | | | A | 585 | | 4 | B | 289 | | 5 | B | 157 | | 6 | B | 272 | | | B | 718 | | | | 1303 | +----+-------+-------+nameの方を集約させてしまうという手もありかもしれません。 GROUP_CONCAT()により文字列を接続することで、集約できます。\ntrdsql -driver mysql -oat -ih \\ \"SELECT id,GROUP_CONCAT(name) as name,class, SUM(CAST(score AS SIGNED)) AS score \" \\ \" FROM score.csv GROUP BY class,id WITH ROLLUP\" +----+--------------------------------+-------+-------+ | id | name | class | score | +----+--------------------------------+-------+-------+ | 1 | bob | A | 174 | | 2 | alice | A | 248 | | 3 | carol | A | 163 | | | bob,alice,carol | A | 585 | | 4 | dave | B | 289 | | 5 | eve | B | 157 | | 6 | flank | B | 272 | | | dave,eve,flank | B | 718 | | | bob,alice,carol,dave,eve,flank | | 1303 | +----+--------------------------------+-------+-------+",
    "description": "",
    "tags": [
      "trdsql",
      "MySQL",
      "PostgreSQL",
      "ROLLUP"
    ],
    "title": "trdsql 合計を行に追加する",
    "uri": "/blog/31_rollup/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Apache",
    "uri": "/tags/apache/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Nginx",
    "uri": "/tags/nginx/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "既存のログをLTSVに変換する 既存のログをLTSVに変換にしてみます。\nmingrammer/flog を使用するとフェイクのログが簡単に出力できるので、 これで出力されるログをLTSV形式に変換する方法を紹介します。\nApache common log 以下のコマンドにより apache_common形式のログをaccess.common.logとして保存します。\nflog -f apache_common -t log -o access.common.log 内容は、以下のようになります。\n92.129.44.198 - metz3917 [30/Dec/2019:17:02:27 +0900] \"DELETE /infomediaries/e-markets HTTP/2.0\" 500 24843 246.54.243.199 - - [30/Dec/2019:17:02:27 +0900] \"POST /24%2f7 HTTP/1.1\" 302 8879 9.172.27.159 - - [30/Dec/2019:17:02:27 +0900] \"DELETE /convergence/best-of-breed HTTP/1.1\" 203 3252 49.129.77.219 - kozey2248 [30/Dec/2019:17:02:27 +0900] \"PUT /embrace HTTP/1.1\" 301 2812 216.42.120.216 - - [30/Dec/2019:17:02:27 +0900] \"HEAD /infomediaries HTTP/2.0\" 204 12516これを trdsqlの -id \" \" によりスペース区切りで解析すると c4とc5でタイムが分かれてしまいますが、それ以外は問題無さそうです。\n+---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+ | c1 | c2 | c3 | c4 | c5 | c6 | c7 | c8 | +---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+ | 92.129.44.198 | - | metz3917 | [30/Dec/2019:17:02:27 | +0900] | DELETE | 500 | 24843 | | | | | | | /infomediaries/e-markets | | | | | | | | | HTTP/2.0 | | | +---------------+----+----------+-----------------------+--------+--------------------------------+-----+-------+適切なラベルを付けるようにしてLTSVで出力します。\ntrdsql -id \" \" -oltsv \\ \"SELECT c1 AS host, c2 AS ident, c3 as user, c4||' '||c5 AS time, c6 AS req, c7 AS status, c8 as size \"\\ \" FROM access.common.log\"host:92.129.44.198\tident:-\tuser:metz3917\ttime:[30/Dec/2019:17:02:27 +0900]\treq:DELETE /infomediaries/e-markets HTTP/2.0\tstatus:500\tsize:24843 host:246.54.243.199\tident:-\tuser:-\ttime:[30/Dec/2019:17:02:27 +0900]\treq:POST /24%2f7 HTTP/1.1\tstatus:302\tsize:8879 host:9.172.27.159\tident:-\tuser:-\ttime:[30/Dec/2019:17:02:27 +0900]\treq:DELETE /convergence/best-of-breed HTTP/1.1\tstatus:203\tsize:3252 host:49.129.77.219\tident:-\tuser:kozey2248\ttime:[30/Dec/2019:17:02:27 +0900]\treq:PUT /embrace HTTP/1.1\tstatus:301\tsize:2812 host:216.42.120.216\tident:-\tuser:-\ttime:[30/Dec/2019:17:02:27 +0900]\treq:HEAD /infomediaries HTTP/2.0\tstatus:204\tsize:12516Apache Combined Log Combined Log も項目が増えるだけで基本的に同じです。\n作成は以下で行いました。\nflog -f apache_combined -t log -o access.combined.logtrdsql -id \" \" -oltsv \\ \"SELECT c1 AS host, c2 AS ident, c3 AS user ,c4||' '||c5 AS time, c6 AS req , c7 AS status, c8 AS size, c9 AS refer, c10 AS ua \"\\ \" FROM access.combined.log\"host:25.54.196.41\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:POST /harness/deliver HTTP/2.0\tstatus:204\tsize:8501\trefer:https://www.directconvergence.biz/real-time/web-readiness/models/facilitate\tua:Opera/9.84 (X11; Linux x86_64; en-US) Presto/2.10.211 Version/12.00 host:60.50.255.15\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:PATCH /end-to-end HTTP/2.0\tstatus:405\tsize:3834\trefer:http://www.district24/365.net/schemas\tua:Mozilla/5.0 (iPad; CPU OS 7_2_1 like Mac OS X; en-US) AppleWebKit/532.17.5 (KHTML, like Gecko) Version/5.0.5 Mobile/8B119 Safari/6532.17.5 host:56.46.161.47\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:PATCH /architect/turn-key/clicks-and-mortar/killer HTTP/1.1\tstatus:304\tsize:63656\trefer:http://www.principalbest-of-breed.com/morph/magnetic/turn-key/cross-media\tua:Mozilla/5.0 (Windows NT 5.2; en-US; rv:1.9.3.20) Gecko/1931-04-08 Firefox/36.0 host:48.195.162.51\tident:-\tuser:-\ttime:[30/Dec/2019:17:13:22 +0900]\treq:PATCH /enhance/extend HTTP/2.0\tstatus:405\tsize:13091\trefer:http://www.districtmorph.name/customized/cutting-edge\tua:Opera/10.97 (X11; Linux i686; en-US) Presto/2.8.259 Version/10.00",
    "description": "",
    "tags": [
      "trdsql",
      "apache",
      "nginx",
      "log",
      "ltsv"
    ],
    "title": "trdsql convert log",
    "uri": "/blog/30_convert_log/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Generate_series",
    "uri": "/tags/generate_series/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "generate_series PostgreSQLにはgenerate_series()という便利な関数があります。 これはUnixのseqコマンドと同じような働きをする関数です。またgenerate_series()は、タイムスタンプ型にも使用できる拡張があります。\n使い方は簡単で「開始値」、「終了値」、「刻み値（省略可能）」を指定して実行します。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT * FROM generate_series(1,10)\" 1 2 3 4 5 6 7 8 9 10generate_series()はテーブルを返す関数で、テーブルの代わりに使用できます。 （SELECT generate_series(1,10)と書くこともできます）。\nもちろん、trdsqlでは、外部からの入力を簡単に取り入れられるので、seqコマンドで代用することもできます。\nseq 1 10|trdsql \"SELECT * FROM -\" 1 2 3 4 5 6 7 8 9 10seqコマンドは、引数の順序が「開始値」、「刻み値（省略可能）」「終了値」になります。 2つの値を渡すときには同じですが、刻み値を指定する場合は、順序が異なるので注意が必要です。\nタイムスタンプ generate_series()では、タイムスタンプを扱えるので、2020年のカレンダーを日本語で出すと少々トリッキーですが、以下のようになります。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SET LC_TIME='ja_JP.UTF-8'; \" \\ \"SELECT to_char(day,'YYYY年TMMonthDD日 (TMDay)') \" \\ \" FROM generate_series('2020-01-1'::timestamp,'2020-12-31','1 day') as day\" 2020年1月01日 (水曜日) 2020年1月02日 (木曜日) 2020年1月03日 (金曜日) 2020年1月04日 (土曜日) .... 2020年12月29日 (火曜日) 2020年12月30日 (水曜日) 2020年12月31日 (木曜日)データを数倍にする ある程度まとまった数のダミーデータが欲しい場合があります。完全に分散したランダムなデータが欲しい場合は専用のツールを使う必要がありますが、 単純に既にあるデータの件数を増やしたいだけであれば、generate_series()や seqコマンドとCROSS JOINすることで作成できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT ROW_NUMBER() OVER() AS id, name \" \\ \" FROM header.csv CROSS JOIN generate_series(1,3) AS s\" id,name 1,Orange 2,Melon 3,Apple 4,Orange 5,Melon 6,Apple 7,Orange 8,Melon 9,Appleseqコマンドを利用すると以下になります。\n（-ih でヘッダーがあるファイルを処理しているときには、seqの1行目もヘッダーと解釈されるので、 1行余分に出力されるように0から開始すると同様の動きになります）。\nseq 0 3|trdsql -driver sqlite3 -ih -oh \\ \"SELECT ROW_NUMBER() OVER() AS id, name \" \\ \" FROM - CROSS JOIN header.csv\" id,name 1,Orange 2,Melon 3,Apple 4,Orange 5,Melon 6,Apple 7,Orange 8,Melon 9,Apple",
    "description": "",
    "tags": [
      "trdsql",
      "generate_series",
      "PostgreSQL"
    ],
    "title": "trdsql generate_series",
    "uri": "/blog/29_generate_series/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: CROSS",
    "uri": "/tags/cross/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: JOIN",
    "uri": "/tags/join/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "CROSS JOINは、総当りを簡単に作り出せる方法です。\na.csv\naa ab acb.csv\nba bb bcの２つのCSVをCROSS JOINすると 3×3で全ての組み合わせを出力できます。\ntrdsql \"SELECT * FROM a.csv CROSS JOIN b.csv\" aa,ba aa,bb aa,bc ab,ba ab,bb ab,bc ac,ba ac,bb ac,bcまた一つのファイルに対して自己結合をすることもできます。 例えば、ホーム＆アウェーの総当り表を作成してみます。\ncleague.csv\nteam 巨人 DeNA 阪神 広島 中日 ヤクルト単純にCROSS JOINするには以下のようになります（JOIN条件は無いので書けません）。\ntrdsql -ih \\ \"SELECT h.team,a.team \"\\ \" FROM cleague.csv AS h \"\\ \" CROSS JOIN cleague.csv AS a\"自分のチームとは対戦出来ないので、同じチームのときをWHERE h.team != a.teamにより除外します。\ntrdsql -ih -omd \\ \"SELECT h.team AS home,a.team AS aware \" \\ \" FROM cleague.csv AS h CROSS JOIN cleague.csv AS a \"\\ \" WHERE h.team != a.team \" home aware 巨人 DeNA 巨人 阪神 巨人 広島 巨人 中日 巨人 ヤクルト DeNA 巨人 DeNA 阪神 DeNA 広島 DeNA 中日 DeNA ヤクルト 阪神 巨人 阪神 DeNA 阪神 広島 阪神 中日 阪神 ヤクルト 広島 巨人 広島 DeNA 広島 阪神 広島 中日 広島 ヤクルト 中日 巨人 中日 DeNA 中日 阪神 中日 広島 中日 ヤクルト ヤクルト 巨人 ヤクルト DeNA ヤクルト 阪神 ヤクルト 広島 ヤクルト 中日 ",
    "description": "",
    "tags": [
      "trdsql",
      "CROSS",
      "JOIN"
    ],
    "title": "trdsql CROSS JOIN",
    "uri": "/blog/28_cross_join/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Config",
    "uri": "/tags/config/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsqlは設定ファイルが無くても動作しますが、設定ファイルによりデフォルトのデータベースのエンジンを変更できます。\nconfigファイルの場所 -configオプションで、直接ファイルの場所を指定できます。\n-configオプションを使用しないデフォルトの場所は以下です。\nLinux等のWindows以外 ${HOME}/.config/trdsql/config.jsonWindows %APPDATA%trdsql\\config.json です。多くは以下の位置になります。\nC:\\Users\\{\"User\"}\\AppData\\Roaming\\trdsql\\config.jsonconfigファイルの内容 以下がサンプルです。\n{ \"db\": \"pdb\", \"database\": { \"sdb\": { \"driver\": \"sqlite3\", \"dsn\": \"\" }, \"pdb\": { \"driver\": \"postgres\", \"dsn\": \"user=test dbname=test\" }, \"mdb\": { \"driver\": \"mysql\", \"dsn\": \"user:password@/dbname\" } } }“database” に “名前”: {“driver”: ドライバ名(sqlite3 or postgres or mysql), “dsn”: “ドライバに沿ったDSN”} でデータベースを定義しておき、最初の “db\"に定義した\"名前\"を書くとデフォルトのエンジンが変更されます。\n上記では、“pdb\"がデフォルトになり、“postgres\"エンジンが使用されます。\nデフォルトの変更だけでなく、ここで定義しておくと trdsqlのオプション -db mdb を指定することにより、簡単にmysqlドライバのエンジンに切り替えられます。\n確認方法 configファイルが無くても動作するため、実際にエンジンが変更されているかわかりにくいことがあります。\ntrdsqlを-debugオプション付きで起動すると詳細が表示されますので、そこで確認して下さい。\n設定ファイルが見つからなかった場合 trdsql -debug -db pdb \"SELECT * FROM testdata/test.csv\" 2019/12/27 11:22:13 configOpen: open /home/noborus/.config/trdsql/config.json: no such file or directory 2019/12/27 11:22:13 ERROR: db[pdb] does not found 2019/12/27 11:22:13 driver: sqlite3, dsn: 2019/12/27 11:22:13 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv] ...（省略） 設定ファイルが見つかった場合 trdsql -debug -db pdb \"SELECT * FROM testdata/test.csv\" 2019/12/27 11:30:18 config found: config.json.sample 2019/12/27 11:30:18 [driver: sdb:sqlite3:] 2019/12/27 11:30:18 \u003e[driver: pdb:postgres:user=test dbname=test] 2019/12/27 11:30:18 [driver: mdb:mysql:user:password@/dbname] 2019/12/27 11:30:18 [SELECT][ ][*][ ][FROM][ ][testdata/test.csv] ...（省略） 4行目にある「\u003e」によって、pdbが使用されていることがわかります。\n",
    "description": "",
    "tags": [
      "trdsql",
      "config",
      "設定"
    ],
    "title": "trdsql config",
    "uri": "/blog/27_config/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: 設定",
    "uri": "/tags/%E8%A8%AD%E5%AE%9A/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: File",
    "uri": "/tags/file/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "SQLファイル名指定オプション「-q」 trdsql “SQLコマンド\"の形式だと、長いSQLを書くのが難しいですし、シェルに対してエスケープしなければならない文字があって見た目もわかりにくい場合があります。\ntrdsqlではファイルにSQLを書いておき、そのファイルのSQLを実行させるオプションがあります。\n以下のように記述したSQLをtest.sqlで保存しておきます。\ntest.sql\nSELECT id, `name` FROM testsql.csv（コマンドの引数で渡していたときは「\\`」のように「`」をエスケープする必要がありましたが、ファイルのSQLを実行する場合は必要ありません）。\ntestsql.csv は対象となるCSVファイルです。\nid,name 1,tarou 2,jirou“SQLコマンド” の代わりに 「-q ファイル名.sql」で実行します。それ以外のオプションは代わりません。\ntrdsql -ih -oat -q test.sql+----+-------+ | id | name | +----+-------+ | 1 | tarou | | 2 | jirou | +----+-------+",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "file"
    ],
    "title": "trdsql SQLファイル指定",
    "uri": "/blog/26_file_sql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Library",
    "uri": "/tags/library/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsqlは初期の頃は、main packageで構成されていましたが、現在はtrdsql packageをmainから呼び出す構成になっていて、trdsql packageをライブラリとして使用できます。\ntrdsqlのパッケージは、以下の構成になっていて、それぞれ呼び出し可能です。\n簡単なサンプルを示します。\npackage main import ( \"log\" \"github.com/noborus/trdsql\" ) func main() { trd := trdsql.NewTRDSQL( trdsql.NewImporter(trdsql.InDelimiter(\":\")), trdsql.NewExporter(trdsql.NewWriter()), ) err := trd.Exec(\"SELECT c1 FROM /etc/passwd\") if err != nil { log.Fatal(err) } }上記のプログラムは/etc/passwdに対してSQL文を実行しています。 Importer(データベースにインポートするインターフェイス）とExporter(データベースから結果を出力するインターフェイス）を与えてTRDSQLをNewし、Execで実行するのが、おおまかな流れです。\nfunc NewTRDSQL(im Importer, ex Exporter) *TRDSQLこのImporter,Exporterはインターフェイスに沿っていれば、置き換えられます（例えば、SQL内のファイルをインポートするのではなく、独自にインポートするにはImporterのインターフェイスに沿った関数を作成します）。\nImporter デフォルトのImporterは、trdsql.NewImporter()を呼び出せば作成できます。 デフォルトのImporterはtrdsql.Import()でReadOptsのオプションを取ります。ここでフォーマットやその他オプションを渡します。\nSQL文にある「/etc/passwd」をデータベースにインポートして使用するのは、デフォルトの動作のため、区切り文字のみ「:」に変更しています。\ntrdsql.Import()はSQL文を受け取り、必要なファイルをデータベースにインポートします。そのときにファイルの形式に合わせたtrdsql.Readerインターフェイス（各CSV,LTSV,JSON,TBLNのReader)からテーブルへインポートされます。\nまた、インポートするデータベースによってバルクインサートかCOPYによるインポートを選択してインポートしています。\nExporter デフォルトのExporterは、trdsql.NewExporter()を呼び出せば作成できます。 SQLでは出力は1つなので、出力する関数（trdsql.NewWriter()）を渡しています。 trdsql.NewWriter()はWriteOptsによりフォーマットと動作のオプションを設定して、実際のWriter関数（CSV、LTSV、JSON、TBLN、AT、VF…)によりSQLを実行した結果を書き出します。\nExec ImporterとExporterの準備が済んでいれば、ExecでSQLを実際に実行します。\nデータベース接続 トランザクションの開始 Importerでインポートの実行 Exporterで指定したSQLの実行をして出力 トランザクションの終了 データベース切断 参考資料 trdsqlには、参考してファイルからのインポートだけでなく、スライスからインポートする関数が入っています。 それを利用したサンプルが _example/slice/ にあります。\nまた、trdsql packageを利用してshirou/gopsutilの結果をSQLで取得できるようにしたものが、 noborus/psutilsql です。\ntrdsqlのgodocも参考にして下さい。\n",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "library"
    ],
    "title": "trdsql ライブラリ使用",
    "uri": "/blog/25_library/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Graph",
    "uri": "/tags/graph/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsqlは、グラフ作成機能は持っていないためグラフを作成したいときには別のツールを使用して作成することになります。\nExcelやLibreOfficeで描画するのが定番でしょうが、ここではmarianogappa/chartでグラフを描画する方法を紹介します。\nmarianogappa/chartは、Goで作られていて、や多くのプラットフォームで動作して、標準入力から受け取ったデータをブラウザに描画します。\n複雑なグラフには向いていませんが、簡単なグラフを少ないオプションを指定するだけで描画できます。\nchartに与えるデータは表示したいグラフによりますが、1列又は2列のデータです。\n例えばchartのデフォルトのpieでは、以下のような文字列が並んでいるようなデータを集計して円グラフにしてくれます。\naaa bbb ccc aaa aaa aaacat aaa.csv|chart（ブラウザが開いて表示されます）\nこれを使用して例えば、ログ集計で使用したログのリクエストをグラフにすると以下のようになります。\ntrdsql \"SELECT req FROM log.ltsv\"|chart また、他のグラフでは、1列目がx項目名で、2列目が値として与えます。デフォルトはタブ区切りのデータを受け取るので、タブ区切りで出力します。\nログ集計のリクエストが多い順をTOP 20に変えて出力すると以下のようになります。\ntrdsql -od \"\\t\" \\ \"SELECT req, count(req) as count \" \\ \"FROM log.ltsv \" \\ \"GROUP BY req \" \\ \"ORDER BY count DESC LIMIT 20\" |chart bar marianogappa/chartは、Chart.jsを使用してグラフを描画しています。Chart.js自体が簡単なJavaScriptを用意すれば描画してくれるので、もう少し複雑なグラフを描きたい場合は直接利用するのが良いでしょう。\n",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "graph"
    ],
    "title": "trdsql グラフ",
    "uri": "/blog/24_graph/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Except",
    "uri": "/tags/except/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "CSV同士やCSVとテーブルなどで、値の比較をしたい場合があります。\n同じ形式で一部が違うCSVファイルであれば、diffを取る方法もありますが、trdsqlのSQLを使用して比較すると形式が違う場合の比較にも使用できます。\n差分の出力 SQLで比較して、差分を出すには、EXCEPTを使用します。EXCEPTは Aのテーブルから Bのテーブルを引いた残りのAの内容を出力します。\nBの方に多くの行があっても関係なく、AにあってBにない行を出力します。\n以下のCSVファイルで比較してみます。new.csvで、3の更新と4の追加があるCSVファイルです。\nold.csv\n1,AAA 2,BBB 3,CCCnew.csv\n1,AAA 2,BBB 3,CCB 4,DDD単純に全列を比較すると1と2の行が同じであるため、消されて残った3と4が出力されます。 この場合old.csv側にnew.csvにない行があっても出力されません。diffの比較とは違いますね。\ntrdsql \"SELECT * FROM new.csv EXCEPT SELECT * FROM old.csv \" 3,CCB 4,DDDテーブルとファイルの差分出力 既存のデータベースに接続すれば、テーブルとの比較もできます。\n例えば、trdsql DBインポートでインポートしたテーブルと更新されたCSVとの比較をしたいときには、以下のようにすると良いでしょう。\nCSVファイル側をキャストして型を合わせています。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT id::int,name FROM fruits.csv \" \\ \"EXCEPT \" \\ \"SELECT id,name FROM fruits \" id,name 4,Grapeデータベース側のテーブルが更新されて新しい場合は、逆にテーブル EXCEPT CSVファイルとすれば、良いでしょう。\n共通の行の出力 また、EXCEPTとは逆に共通の行を出力させたいときには、INTERSECT を使用します。\n\"SELECT id::int,name FROM fruits.csv \" \\ \"INTERSECT \" \\ \"SELECT id,name FROM fruits\" id,name 1,Orange 2,Melon 3,Apple",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "except"
    ],
    "title": "trdsql 差分、比較",
    "uri": "/blog/23_except/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "CSVやLTSVなどのフラットな形式のデータは、JSONにしたいときには（-ojsonによる）JSON出力をすれば良いですが、JSONは本来より深い階層も表現できるフォーマットです。\nそのようなJSONは、データベースのJSON関数を使用することにより作成できます。\n以下のCSVからJSON関数でJSON出力をしてみます。\nid,name 1,Orange 2,Melon 3,AppleJSON関数で出力する場合は、「”」等がエスケープされない-orawを使用して出力すると、有効なJSONとして出力できます。\nSQLite3、MySQL SQLite3、MySQLでは、json_array()やjson_object()を使用することによりJSONを生成できます。 ここでは「名前:値」の形式で出力するためjson_objectを使用します。2つペアの引数で、指定していきます。\ntrdsql -ih -oraw \"SELECT json_object('id',id,'name',name) FROM header.csv\" {\"id\":\"1\",\"name\":\"Orange\"} {\"id\":\"2\",\"name\":\"Melon\"} {\"id\":\"3\",\"name\":\"Apple\"}階層を深くするには、json_object()を内部でさらに使います。 SQLite3にはjson_pretty()関数が無いので、jqで見やすくしています。\ntrdsql -ih -oraw \"SELECT json_object('fruits', json_object('id',id,'name',name)) FROM header.csv\"|jq . { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } } { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } } { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } }上記の結果は1行1JSONで出力されています。これをさらに配列にして、一つのJSONにするには、SQLite3では json_group_array()、MySQLではjson_arrayagg()でグループ化して出力できます。\nSQLite3 trdsql -ih -oraw \"SELECT json_group_array(json_object('fruits', json_object('id',id,'name',name))) FROM header.csv\"|jq . [ { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } }, { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } }, { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } } ]MySQL trdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih -oraw \"SELECT json_pretty(json_arrayagg(json_object('fruits', json_object('id',id,'name',name)))) \"\\ \"FROM header.csv\" [ { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } }, { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } }, { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } } ]MySQLでは、結果をjson_pretty()で処理すれば、同じようなインデントで表示できます。\nPostgreSQL PostgreSQLでは、JSONを扱うのにjsonとjsonbの２つの型があり、関数もそれぞれあります。\n格納されるときには、jsonbはバイナリ形式でJSONとして有効かチェックされるなど違いがあります。また、関数が一方にしかない場合があるので、考慮して使用してください。\n今回は jsonb_pretty()がjsonbにしかないので、jsonb関数を使用します。SQLite3やMySQLのjson_object()とほぼ同じ動作をする関数jsonb_build_object()を使用するとJSONを生成できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oraw \"SELECT jsonb_pretty(jsonb_build_object('fruits', jsonb_build_object('id',id,'name',name))) \"\\ \"FROM header.csv\" { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } } { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } } { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } }これをさらに配列にして一つのJSONにするには、json_agg()又はjsonb_agg()を使用します。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oraw \"SELECT jsonb_pretty(jsonb_agg(jsonb_build_object('fruits', jsonb_build_object('id',id,'name',name)))) FROM header.csv\" [ { \"fruits\": { \"id\": \"1\", \"name\": \"Orange\" } }, { \"fruits\": { \"id\": \"2\", \"name\": \"Melon\" } }, { \"fruits\": { \"id\": \"3\", \"name\": \"Apple\" } } ]",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "json"
    ],
    "title": "trdsql JSON出力",
    "uri": "/blog/22_json_output/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "これまでtrdsqlでは、JSONの入力が可能と書きましたが、例として書いたのは基本的にフラットな構造のJSONでした。 ただ、２階層以上の階層構造が含まれるJSONはエラーになる訳ではなく、そのまま文字列として扱われます。\n以下のようなJSONがあるとします。\nsample.json\n[ { \"color\": \"white\", \"category\": \"value\", \"code\": { \"rgba\": [0, 0, 0, 1], \"hex\": \"#FFF\" } }, { \"color\": \"red\", \"category\": \"hue\", \"type\": \"primary\", \"code\": { \"rgba\": [255, 0, 0, 1], \"hex\": \"#FF0\" } }, { \"color\": \"blue\", \"category\": \"hue\", \"type\": \"primary\", \"code\": { \"rgba\": [0, 0, 255, 1], \"hex\": \"#00F\" } } ]これをそのままtrdsqlを実行すると以下のようになります(見やすいように-oatを付けています。CSV出力にすると「\"」が含まれる文字列のためエスケープされて出力されます。)\ntrdsql -oat \"SELECT color,category,code FROM sample.json\" +-------+----------+-----------------------------------+ | color | category | code | +-------+----------+-----------------------------------+ | white | value | {\"hex\":\"#FFF\",\"rgba\":[0,0,0,1]} | | red | hue | {\"hex\":\"#FF0\",\"rgba\":[255,0,0,1]} | | blue | hue | {\"hex\":\"#00F\",\"rgba\":[0,0,255,1]} | +-------+----------+-----------------------------------+このcodeは文字列の扱いですが、各データベースは既にJSONを扱える関数を備えているため、データベース側の関数を使って変更できます。\nSQLite3, MySQL SQLite3とMySQLではjson_extract()により$をルートとして（コマンドラインでは$が意味を持つので「\\」でエスケープしてください）、指定した値を取得出来ます。 codeの中の\"hex\"のみを表示するには以下のようにします。\ntrdsql -ijson -oat \"SELECT color,category,json_extract(code,'\\$.hex') AS hex FROM sample.json\" +-------+----------+------+ | color | category | hex | +-------+----------+------+ | white | value | #FFF | | red | hue | #FF0 | | blue | hue | #00F | +-------+----------+------+PostgreSQL PostgreSQLでは、json_extract_path_textを使用して、取得できます。 PostgreSQLで取得する場合は、jsonやjsonbにキャストしてから関数を使用してください。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT color,category,json_extract_path_text(code::json,'hex') AS hex FROM sample.json\" +-------+----------+------+ | color | category | hex | +-------+----------+------+ | white | value | #FFF | | red | hue | #FF0 | | blue | hue | #00F | +-------+----------+------+また、PostgreSQLでは12からjsonb_path_query()でJSON_PATH指定で取得できます（返されるのは、textではなくJSONの値です）。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT color,category,jsonb_path_query(code::jsonb,'\\$.hex')::text AS hex FROM sample.json\" +-------+----------+--------+ | color | category | hex | +-------+----------+--------+ | white | value | \"#FFF\" | | red | hue | \"#FF0\" | | blue | hue | \"#00F\" | +-------+----------+--------+まとめ データベースのJSON関数はさらに多くの関数があり、JSON内のオブジェクトを編集できたりします。しかし、trdsqlでは、JSON出力時にJSONの列も文字列として扱うため、-ojsonでの出力とは相性がよくありません。\nその場合は、データベース側のJSON出力を有効に活用した方が意図通り出力できます。\n",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "json"
    ],
    "title": "trdsql JSON解析",
    "uri": "/blog/21_json_parse/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ファイル内に入っている日付、時刻をそのまま扱う場合は良いですが、変換等の処理をしたい場合があります。\nその場合は、一旦日付や時刻と解釈させてから扱う方が扱いやすくなります。\nSQLite3の日付、時刻処理 デフォルトのSQLite3の日付、時刻処理では、以下のフォーマットであれば、日付、時刻として解釈することができます。 もしSQLite3のエンジンで処理したい場合は、このフォーマットにしておくと良いでしょう。\nYYYY-MM-DD YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM:SS YYYY-MM-DD HH:MM:SS.SSS YYYY-MM-DDTHH:MM YYYY-MM-DDTHH:MM:SS YYYY-MM-DDTHH:MM:SS.SSS HH:MM HH:MM:SS HH:MM:SS.SSS now DDDDDDDDDD 以下のようなログファイルのtimeを処理したい場合、\ntime:2015-09-06T05:58:05+09:00\tmethod:POST\t... time:2015-09-06T05:58:41+09:00\tmethod:POST\t... time:2015-09-06T06:00:42+09:00\tmethod:GET\t...datetime(time)で日時として、認識させれば、strftime()で再フォーマットがしやすくなります。\ntrdsql -iltsv \"SELECT strftime('%Y年%m月%d日%H時%M分%S秒',datetime(time)) FROM log.ltsv\" 2015年09月05日20時58分05秒 2015年09月05日20時58分41秒 2015年09月05日21時00分42秒上記以外のフォーマットの場合は、SQLite3では文字列をまず書き換える必要があります。\nPostgreSQLの日付、時刻処理 PostgreSQLの日付、時刻処理は、より豊富なフォーマットを処理できます。\n多くの場合は、dateやtimestampにCASTするだけで、多くの有名なフォーマットは解釈されます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT to_char(CAST(time AS timestamp),'YYYY年MM月dd日HH24時MI分ss秒') FROM log.ltsv\" 2015年09月06日05時58分05秒 2015年09月06日05時58分41秒 2015年09月06日06時00分42秒日付、時刻型に変換されるので、そこから表示するフォーマットに変換するにはto_char()を使用します。指定の仕方はマニュアルを参照して下さい。\nさらに独特なフォーマットの場合は、 to_dateやto_timestampにより自分で定義したフォーマットで解釈させることが出来ます。\n例えば上記で出力したフォーマットの場合、to_charと同じフォーマット指定でto_timestampを実行すれば逆にタイムスタンプとして扱われます。\ntrdsql -ih -oh -driver postgres -dsn \"dbname=trdsql_test\" \"SELECT to_timestamp(\\\"日時\\\",'YYYY年MM月dd日HH24時MI分ss秒') FROM d.csv\" 2015-09-05T20:58:05+09:00 2015-09-05T20:58:41+09:00 2015-09-05T21:00:42+09:00MySQLの日付、時刻処理 MySQLでも多くのフォーマットをdate()やtimestamp()により変換させることができます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -oat \"SELECT date(time),timestamp(time) FROM log.ltsv\" +------------+----------------------------+ | date(time) | timestamp(time) | +------------+----------------------------+ | 2015-09-06 | 2015-09-06 05:58:05.000000 | | 2015-09-06 | 2015-09-06 05:58:41.000000 | | 2015-09-06 | 2015-09-06 06:00:42.000000 | +------------+----------------------------+独自のフォーマットを解釈させる場合は、STR_TO_DATE()を使用します。 上記の年月日時分秒を解釈させるには次のようにします。\ntrdsql -ih -driver mysql -dsn \"noborus:noborus@/trdsql_test\" \"SELECT STR_TO_DATE(\\`日時\\`,'%Y年%m月%d日%H時%i分%s秒') FROM d.csv\" 2015-09-05 20:58:05 2015-09-05 20:58:41 2015-09-05 21:00:42日時から表示するフォーマットには、DATE_FORMAT()が使用できます。「/」で日付を表示してみます。\ntrdsql -ih -driver mysql -dsn \"noborus:noborus@/trdsql_test\" \"SELECT DATE_FORMAT(STR_TO_DATE(\\`日時\\`,'%Y年%m月%d日%H時%i分%s秒'),'%Y/%m/%d') FROM d.csv\" 2015/09/05 2015/09/05 2015/09/05日付、時刻処理はフォーマットがそれぞれ違うので、各データベースのマニュアルを参照して下さい。\n",
    "description": "",
    "tags": [
      "trdsql",
      "sql"
    ],
    "title": "trdsql 日付・時刻処理",
    "uri": "/blog/20_date/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "これまでグループ集計による集計を紹介していますが、グループ集計は元の行とはまったく別にグループ毎の行を出力していました。 つまり、元のファイルとは別に集計の結果を出力していた訳です。\nそうではなくて、元のファイルの情報にプラスして集計結果を出して欲しい場合があります。 例えば、点数の列では、点数の平均との差を出力したり、柔軟な計算が出来るようになります。これまでの方法では、一旦集計してからJOINするしかありませんでしたが、SQLのWindow関数を使うとそういった集計も出すことが出来ます。\n古いバージョンではSQLite3では、Window関数を使用できませんでしたが、現在のtrdsqlに含まれているSQLite3では、Window関数を使用できます。\nPostgreSQLやMySQLでもWindow関数が使用できますが、MySQLは8.0からなので、注意が必要です。\n合計の表示 合計の計算は集計計算で出しましたが、最後の結果のみを出力していました。 Window関数では、行毎に結果を表示できます。\n例えば、以下のような点数のCSVについて結果を表示してみます。\nid,class,name,score 1,A,bob,174 2,A,alice,248 3,A,carol,163 4,B,dave,289 5,B,eve,157 6,B,flank,272Window関数は集約関数の関数にOVER ()句を付けることにより範囲や、順序を指定することにより計算をおこないます。 OVER ()句があることで、他の列とは独立して対象の行以外を計算できます。\nOVER()句を空で指定すると全行が対象となります。\ntrdsql -ih -omd \\ \"SELECT id,name,score, SUM(CAST(score AS int)) OVER () FROM score.csv\" | id | name | score | sum | |----|-------|-------|------| | 1 | bob | 174 | 1303 | | 2 | alice | 248 | 1303 | | 3 | carol | 163 | 1303 | | 4 | dave | 289 | 1303 | | 5 | eve | 157 | 1303 | | 6 | flank | 272 | 1303 |SUM()で合計が求められるので、AVG()で平均も求められます。\n平均との差 Window関数を使用した平均と対象の行との計算が可能です。 差を表示させると以下のようになります。\ntrdsql -ih -omd \\ \"SELECT id,name,score,\" \\ \"score - round(AVG(score) OVER()) AS 平均との差\"\\ \" FROM score.csv\" | id | name | score | 平均との差 | |----|-------|-------|------------| | 1 | bob | 174 | -43 | | 2 | alice | 248 | 31 | | 3 | carol | 163 | -54 | | 4 | dave | 289 | 72 | | 5 | eve | 157 | -60 | | 6 | flank | 272 | 55 |round()は小数点以下を丸める関数です。\nこれまでのSQLでは、1行づつの処理か、グループ化しての処理どちらかだけだったのが、Window関数では行の範囲を決めて、その処理を各行ごとに求められます。\n行の範囲の指定は「PARTITION BY」の後に「GROUP BY」で指定するような列が指定できます。\n全体ではなく、class毎に変更して出力してみます。\ntrdsql -ih -omd \\ \"SELECT id,class,name,score,\" \\ \"score - ROUND(avg(score) OVER(PARTITION BY class)) \"\\ \"AS 平均との差\" \\ \"FROM score.csv\" | id | class | name | score | 平均との差 | |----|-------|-------|-------|------------| | 1 | A | bob | 174 | -21 | | 2 | A | alice | 248 | 53 | | 3 | A | carol | 163 | -32 | | 4 | B | dave | 289 | 50 | | 5 | B | eve | 157 | -82 | | 6 | B | flank | 272 | 33 |class Aでは平均195との差を表示していて、class Bでは平均239との差を表示しています。\nここに先程の全体の平均との差を表示するのも並べるだけでできます。\ntrdsql -ih -omd \\ \"SELECT id,class,name,score,\" \\ \"score - ROUND(avg(score) OVER(PARTITION BY class)) \"\\ \"AS class平均との差, \" \\ \"score - round(AVG(score) OVER()) AS 全体平均との差\"\\ \"FROM score.csv\"行番号の付与 Window関数を使うと行番号を付けることもできます。\nfruits.ltsv\nname:grape\tnum:10 name:apple\tnum:3 name:banana\tnum:5 name:orange\tnum:2上記のLTSVファイルに、ROW_NUMBER() は集約関数にはないWindow関数特有の関数です。OVER()により範囲全体、順番の指定なしで使用すると以下のようになります。\ntrdsql \"SELECT ROW_NUMBER() OVER(), name,num \" \\ \"FROM fruits.ltsv\" 1,grape,10 2,apple,3 3,banana,5 4,orange,2順番を指定するには「ORDER BY」を指定します。\ntrdsql \"SELECT ROW_NUMBER() OVER(ORDER BY CAST(num AS int)),\" \\ \" name,num FROM fruits.ltsv\" 1,orange,2 2,apple,3 3,banana,5 4,grape,10Window関数には、まだまだ多くの種類の関数があります。各データベースのマニュアルを参照して下さい。\n",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "window関数"
    ],
    "title": "trdsql Window関数",
    "uri": "/blog/19_window/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Window関数",
    "uri": "/tags/window%E9%96%A2%E6%95%B0/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "これまで列の並べ替えはしてきましたが、列の内容はそのままでした。 SQLでは、文字列の書き換えが得意分野とは言えませんが、SQLの関数を使うことにより、それなりできる機能は揃っています。\n列の連結 「||」を使って、列名をつなげば、２つ以上の列を連結して一つの列になります。\ntrdsql -ih -oh \\ \"SELECT id,name||id AS name_id FROM header.csv\" id,name_id 1,Orange1 2,Melon2 3,Apple3列と列だけでなく、文字列をそのまま連結も可能です。SQLの文字列は「’」シングルクオートで括ります。\ntrdsql -ih -oh \\ \"SELECT id,name||'_'||id AS name_id FROM header.csv\" id,name_id 1,Orange_1 2,Melon_2 3,Apple_3PostgreSQL、MySQL またPostgreSQLとMySQLでは、複数の列をつなげたいときには concat(列名or文字列,列名or文字列,…) が使用できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT concat(id,name,'個') FROM header.csv\" concat 1Orange個 2Melon個 3Apple個接続文字を付けてつなげたい場合は、concat_ws(接続文字,列名or文字列,列名or文字列,…)が使用できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT concat_ws(' ',id,name,'個') FROM header.csv\" concat_ws 1 Orange 個 2 Melon 個 3 Apple 個SQLite3 SQLite3では、concat,concat_wsはありませんが、printfが使用できますので、より柔軟に文字列を生成できます。\ntrdsql -ih -oh \"SELECT printf('%s %s %s',id,name,'個') FROM header.csv\" \"printf(\"\"%s %s %s\"\",id,name,'個')\" 1 Orange 個 2 Melon 個 3 Apple 個部分文字列 列の文字列を一部分だけ使用します。substr(列名or文字列、開始位置、文字の長さ)関数を使用します。\ntrdsql -ih -oh \\ \"SELECT id,substr(name,1,2) AS short FROM header.csv\" id,short 1,Or 2,Me 3,Ap文字置き換え 例えば、name列に含まれる’e’を’x’に置き換えます。\ntrdsql -ih -oh \\ \"SELECT id,replace(name,'e','x') AS name FROM header.csv\" id,name 1,Orangx 2,Mxlon 3,Applx置き換え前と置き換え後の文字数は同じでなくても構いません。\n大文字、小文字変換用の関数もあります。\nすべて小文字へ\ntrdsql -ih -oh \\ \"SELECT id,lower(name) FROM header.csv\" id,lower(name) 1,orange 2,melon 3,appleすべて大文字へ\ntrdsql -ih -oh \\ \"SELECT id,upper(name) FROM header.csv\" id,upper(name) 1,ORANGE 2,MELON 3,APPLEこのぐらいの書き換えで済む場合は良いですが、スクリプト言語ならば正規表現を使って書き換えられるのが普通なので、見劣りします。 PostgreSQLやMySQLエンジンを使うともう少し便利関数があります。\nregexp_replace PostgreSQL の regexp_replace(列名or文字列,正規表現パターン,置き換え文字列)を使用して、2文字目から4文字目までをxに置き換えます。\n()で囲ったパターンは、\\1,\\2…の参照文字として使用できます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh \\ \"SELECT id,regexp_replace(name, '(.)...','\\1xxx') FROM header.csv\" id,regexp_replace 1,Oxxxge 2,Mxxxn 3,AxxxeMySQLでは、8.0からregexp_replace()が使用できるようです。ただし参照文字が $1,$2…となります。そしてコマンドの引数で$1を使用するとシェルに解釈されてしまうので、\\でエスケープが必要になります。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih -oh \\ \"SELECT id,regexp_replace(name, '(.)...','\\$1xxx') FROM header.csv\" id,\"regexp_replace(name, '(.)...','$1xxx')\" 1,Oxxxge 2,Mxxxn 3,Axxxe",
    "description": "",
    "tags": [
      "trdsql",
      "sql"
    ],
    "title": "trdsql 列の編集",
    "uri": "/blog/18_edit_columns/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "既にテーブルが存在するデータベースに接続することにより、ファイルとテーブルをJOINすることもできます。\n例えば、データベース内にfruitsというテーブルがあった場合に、前回のabc.csvとJOINできます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SELECT a.c1, a.c2, f.name FROM abc.csv AS a \"\\ \"LEFT JOIN fruits AS f ON (CAST(a.c1 AS int) = f.id)\" 1,AAA,Orange 2,BBB,Melon 3,CCC,Apple例えば、データベース上にusersテーブルがあり、抽出したいリストがCSVファイルであった場合に、リストをWHERE user IN (...)で並べる等を検討するところですが、trdsqlではダイレクトにJOINして抽出できます。\nlist.csv\ntarou jirou noborususersテーブル\nid,name 1,taizou 2,momo 3,taroutrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SELECT u.id, u.name FROM users AS u \"\\ \"INNER JOIN list.csv AS l ON (u.name = l.c1)\" 3,tarou逆にCSVファイルにデータベースのテーブルから情報を足すといったことも考えられます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" \\ \"SELECT u.id, u.name FROM list.csv AS l \"\\ \"LEFT JOIN users AS u ON (l.c1 = u.name)\" \\ \"ORDER BY u.id\" 3,tarou 52,jirou 98,noborus",
    "description": "",
    "tags": [
      "trdsql",
      "SQL",
      "JOIN"
    ],
    "title": "trdsql ファイルとテーブルのJOIN",
    "uri": "/blog/17_file_table/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "これまで一つのファイルにSQLを実行してきましたが、複数のファイルをJOINするSQLも実行できます。\n以下の2つのCSVファイルがあったとして、\nabc.csv\n1,AAA 2,BBB 3,CCCprice.csv\n1,100 2,500 3,50以下のように連結するのが、JOINです。\n1,AAA,100 2,BBB,500 3,CCC,50trdsqlではテーブルの代わりにファイル名を使用すれば、そのままSQLのJOINが書けます。\ntrdsql \"SELECT a.c1, a.c2, p.c2\" \\ \"FROM abc.csv AS a\" \\ \"LEFT JOIN price.csv AS p\" \\ \"USING (c1)\"同じ件数で対応する同じ列がある1対1のJOINのため、INNER JOINと同じ結果になります。 LEFT JOINの場合は、先に指定したabc.csvの行はすべて表示され、price.csvは対応する行がある場合のみ表示されます。 今回はヘッダーがないCSVなので、列名はc1,c2…の共通になるため、一番左側(c1)が共通の列としてUSINGを使用してます。これは ON a.c1 = p.c1 と同じ意味になります。\n複数のCSVをJOINするときには、ヘッダーの有無を統一しておく必要があります。\nしかしながら、自動判別可能な拡張子になっていれば、CSVとLTSV等の混在は可能です。\nunit.ltsv\nid:1\tunit:個 id:2\tunit:箱先程のCSVのJOINの結果に更にLTSVをJOINします。\ntrdsql -oat \\ \"SELECT a.c1, a.c2, p.c2, unit\" \\ \" FROM abc.csv AS a\" \\ \"LEFT JOIN price.csv AS p\" \\ \"USING (c1)\" \\ \"LEFT JOIN unit.ltsv AS u \" \\ \"ON (a.c1 = u.id)\" +----+-----+-----+------+ | c1 | c2 | c2 | unit | +----+-----+-----+------+ | 1 | AAA | 100 | 個 | | 2 | BBB | 500 | 箱 | | 3 | CCC | 50 | | +----+-----+-----+------+",
    "description": "",
    "tags": [
      "trdsql",
      "SQL",
      "JOIN"
    ],
    "title": "trdsql JOIN",
    "uri": "/blog/16_join/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: SQLite3",
    "uri": "/tags/sqlite3/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsqlにはデータベースにインポートするオプションはありません。 しかしながら、SELECT以外のSQLの実行も可能なので、SQLによるインポートが可能です。\n以下は、メモリデータベースにインポートしても終了すると消えてしまうので、メモリデータベース以外のデータベースに接続して実行します。\nCREATE TABLE AS テーブルを作成してインポートするには CREATE TABLE ASを使用します。\nPostgreSQL で CREATE TABLE AS まず、PostgreSQLへデータをインポートしてみます。 これまで、SELECTで実行してきた内容に CREATE TABLE テーブル名 AS を前につければ、テーブルが作成されデータがインポートされます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"CREATE TABLE test AS SELECT * FROM header.csv\"成功した場合、何も表示されずに終了します。失敗した場合、エラーが表示されます。\nSELECTの結果がインポートされるため、SELECT側で列名の変更、列の型指定、インポートするデータの条件指定をすれば良いことになります。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"CREATE TABLE fruits AS SELECT id::int AS num, name::VARCHAR(20) FROM header.csv\"trdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih -oh\\ \"SELECT * FROM fruits\" num,name 1,Orange 2,Melon 3,Appleもし、テーブルの作成のみを先にして、INSERTを後でおこないたい場合はWITH NO DATAを付けます。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"CREATE TABLE test AS SELECT id::int, name FROM header.csv WITH NO DATA\"MySQL で CREATE TABLE AS PostgreSQLと同様にCREATE TABLE テーブル名 ASを前に付ければ、データがインポートされます。\nSELECTの結果のCASTには制限があるので、SELECT時のCASTでは不十分な場合があります。 CREATE TABLE テーブル名 (列名 型名)という構文が使えるので、SELECTの結果に合わせて型名を指定するのが良いでしょう。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv\"MySQLで、デーブルの作成のみをおこない場合は、LIMIT 0や WHERE 1=2でSELECTの件数を0にします。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"CREATE TABLE fruits (num int, name varchar(20)) AS SELECT id AS num,name FROM header.csv WHERE 1=2\"SQLite3 で CREATE TABLE AS SQLite3でも同様にCREATE TABLE テーブル名 ASを前に付ければ、データがインポートされます。\nSQLite3では、実際のデータ型は基本的な型（INTEGER、REAL、TEXT、BLOB）になるので、CASTはこれらの型にする場合のみ必要です。\nそれ以外は、後で制約として追加するのが良いでしょう。\ntrdsql -driver sqlite3 -dsn \"trdsql_test\" -ih \\ \"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num, name FROM header.csv\"SQLite3で、デーブルの作成のみをおこない場合は、LIMIT 0や WHERE 1=2でSELECTの件数を0にします。\ntrdsql -driver sqlite3 -dsn \"trdsql_test\" -ih \\ \"CREATE TABLE fruits AS SELECT CAST(id AS int) AS num,name FROM header.csv WHERE 1=2\"SQLite3では後から主キーを付けることができません。\nINSERT 既にテーブルがあって、ファイルの内容をインポートしたい場合は、SELECTの前に INSERT INTO テーブル名を付けて、実行します。 これは、ほぼデータベース共通です。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv\"上記でCREATA TABLE ASした場合等で、主キーを付けていないと繰り返し実行してしまうとそのまま重複してINSERTされます。\nPostgreSQLでは、INSERTにON CONFLICTが使用できるので、主キーを付けてから、\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"ALTER TABLE fruits ADD CONSTRAINT table_key PRIMARY KEY(id);\"INSERT ON CONFLICTの構文を使用すると差分のみINSERTができます。\n既に同じidが在る行については何もしない。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv ON CONFLICT DO NOTHING\"既に同じidが在る行についてはUPDATEする。\ntrdsql -driver postgres -dsn \"dbname=trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv \"\\ \"ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name\"MySQLでは、INSERT IGNOREで重複エラーを回避できます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"INSERT IGNORE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv\"既に同じidが在る行をUPDATEするにはON DUPLICATE KEY UPDATEを使用して以下のようにします。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"INSERT INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h \"\\ \"ON DUPLICATE KEY UPDATE name = h.name\"又は、REPLACE INTO文が使用できます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -ih \\ \"REPLACE INTO fruits SELECT CAST(id AS unsigned) AS num,name FROM header.csv AS h \"SQLite3は、主キーがあるテーブルが作成済みであれば、同様にREPLACE INTO文が使用できます。\ntrdsql -driver sqlite3 -dsn \"trdsql_test.db\" -ih \\ \"REPLACE INTO fruits SELECT CAST(id AS int) AS num,name FROM header.csv AS h \"",
    "description": "",
    "tags": [
      "trdsql",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "SQLite3"
    ],
    "title": "trdsql DBインポート",
    "uri": "/blog/15_import/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "SQLite3への接続方法を説明します。\nSQLite3に接続 そもそもtrdsqlのデフォルトはSQLite3のメモリデータベースに接続していますが、メモリデータベース以外にも接続できます。\nオプションの -driver に sqlite3 を指定し、-dsn にサーバーへの接続情報を指定します。\ndsnはsqlite3のデータファイル名を指定すれば、そのファイルをデータベースとして使用します。 （ファイル名の指定の仕方はfile: や file:// 等も可能です）。\nあらかじめファイルが無い場合もエラーにはなりません。\ntrdsql -driver sqlite3 -dsn \"test.sqlite\" -oat \"SELECT * FROM test\" +----+--------+-------+ | id | name | price | +----+--------+-------+ | 1 | Orange | 50 | | 2 | Melon | 500 | | 3 | Apple | 100 | +----+--------+-------+さらに「?」で続けて、オプションを渡すこともできます。 メモリデータベースでオプションを渡すときには 「:memory:?」の後にオプションを続けて下さい。\n例えば、LIKEで大文字小文字を区別するように変更するには以下のようにします。\nデフォルトではLIKEは大文字小文字が区別されない。\ntrdsql -driver sqlite3 -dsn \":memory:\" -ih \"SELECT * FROM header.csv WHERE name LIKE '%a%'\" 1,Orange 3,Apple_cslike=trueにすると大文字小文字が区別されます。\ntrdsql -driver sqlite3 -dsn \":memory:?_cslike=true\" -ih \"SELECT * FROM header.csv WHERE name LIKE '%a%'\" 1,Orangeデータベースファイルに対してmodeを指定する場合は、file:ファイル名?mode=で指定します。\nmode=rwcでは書き込みが成功します。\ntrdsql -ih -driver sqlite3 -dsn \"file:trdsql_test.db?mode=rwc\" \"CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv \" mode=roでは書き込みが禁止されエラーになります。\ntrdsql -ih -driver sqlite3 -dsn \"file:trdsql_testro.db?mode=ro\" \"CREATE TABLE users AS SELECT CAST(id as int), CAST(name AS varchar(20)) FROM user.csv \" 2020/01/08 14:02:54 ERROR(BEGIN):unable to open database file: no such file or directoryDSNのオプションの詳細は go-sqlite3のページを参照して下さい。\n",
    "description": "",
    "tags": [
      "trdsql",
      "sqlite3"
    ],
    "title": "trdsql SQLite3エンジンの使用",
    "uri": "/blog/14_sqlite3/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "前回はPostgreSQL接続の話でしたが、今度はMySQLに接続して使用する方法を説明します。\nMySQLに接続 MySQLに接続するには動作しているMySQLサーバーが必要です。接続できテーブルが作成できる権限があるデータベースを作成しておきます。\nオプションの -driver に mysql を指定し、-dsn にサーバーへの接続情報を指定します。\nMySQLのdsnは以下のような形式です。\nユーザー名:パスワード@プロトコル(ホスト名:ポート番号)/データベース名?param=valueparam=valueのパラメーターは多くの種類がありますので、go-sql-driverを参照して下さい。\nUNIXドメインソケット ローカルホストのデフォルトのUNIXドメインソケットを使用する場合は、ユーザー名、パスワード、データベース名を指定すれば接続できます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" \"SELECT 1\" UNIXドメインソケットのパスを指定するには、プロトコルにunixを指定して、unix(パス)で指定します。\ntrdsql -driver mysql -dsn \"noborus:noborus@unix(/var/run/mysqld/mysqld.sock)/trdsql_test\" \"SELECT 1\" TCP接続 TCPはプロトコルにtcpを指定して、tcp(ホスト名:ポート番号)を指定します。\ntrdsql -driver mysql -dsn \"noborus:noborus@tcp(localhost:3306)/trdsql_test\" \"SELECT 1\" 実テーブルの出力 接続できれば、これまでと同じようにSQLが実行できますが、実際に実行されるのはMySQL上なので、MySQLが実行できるSQLを書く必要があります。\n前回のPostgreSQLと同様にMySQLのテーブルに対してSQLを実行し、オプションで指定したフォーマットで出力することが出来ます。\ntrdsql -driver mysql -dsn \"noborus:noborus@/trdsql_test\" -oat -ih \"SELECT * FROM actor LIMIT 10\" +----------+------------+--------------+---------------------+ | actor_id | first_name | last_name | last_update | +----------+------------+--------------+---------------------+ | 1 | PENELOPE | GUINESS | 2006-02-15 04:34:33 | | 2 | NICK | WAHLBERG | 2006-02-15 04:34:33 | | 3 | ED | CHASE | 2006-02-15 04:34:33 | | 4 | JENNIFER | DAVIS | 2006-02-15 04:34:33 | | 5 | JOHNNY | LOLLOBRIGIDA | 2006-02-15 04:34:33 | | 6 | BETTE | NICHOLSON | 2006-02-15 04:34:33 | | 7 | GRACE | MOSTEL | 2006-02-15 04:34:33 | | 8 | MATTHEW | JOHANSSON | 2006-02-15 04:34:33 | | 9 | JOE | SWANK | 2006-02-15 04:34:33 | | 10 | CHRISTIAN | GABLE | 2006-02-15 04:34:33 | +----------+------------+--------------+---------------------+",
    "description": "",
    "tags": [
      "trdsql",
      "mysql"
    ],
    "title": "trdsql MySQLエンジンの使用",
    "uri": "/blog/13_mysql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsqlは組込みのSQLite3を利用してSQLを実行していますが、データベースの処理を別のデータベースに変更出来ます。\nここではPostgreSQLを使用する方法を説明します。\nPostgreSQLに接続 SQLite3と違いPostgreSQLは動作しているPostgreSQLサーバーが必要です。接続できテーブルが作成できる権限があるデータベースを作成しておきます。\nオプションの -driver に postgres を指定し、-dsn にサーバーへの接続情報を指定します。\ndsnの項目には以下が指定できます。デフォルトの場合は省略可能です。\n項目名 説明 dbname データベース名（デフォルト:ログインユーザー名） user ユーザー名（デフォルト:ログインユーザー名） password パスワード（デフォルト:なし） host ホスト名又はIPアドレス（デフォルト:localhost） port ポート番号(デフォルト: 5432) sslmode SSLモード（デフォルト: require） fallback_application_name （提供されない場合の）アプリケーション名（デフォルト:なし） connect_timeout 接続の最大待機時間 sslcert 証明書ファイルの場所 sslkey 秘密鍵ファイルの場所 sslrootcert ルート証明書ファイルの場所 項目=値をスペース区切りで指定します。\nDSN指定 例えば、ローカルホストのportが5433でデータベース名がtrdsql_testに接続するには以下のようにします。\ntrdsql -driver postgres -dsn \"host=localhost port=5433 dbname=trdsql_test\" \"SELECT 1\" UNIXドメインソケット UNIXドメインソケットへ接続もできます。\nパッケージ等でPostgreSQLをインストールすると以下のような場所にUNIXドメインソケットファイルが作成されています。\n/var/run/postgresql/.s.PGSQL.5432上記の場合、hostに/var/run/postgresql/を指定します。「/」から始まるとUnixドメインソケットとみなされます。portは.s.PGSQL.の後にある「5432」を指定します。\ntrdsql -driver postgres -dsn \"host=/var/run/postgresql/ port=5432 dbname=trdsql_test\" \"SELECT VERSION()\" \"PostgreSQL 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 7.4.0-1ubuntu1~18.04.1) 7.4.0, 64-bit\"ソースからインストールした場合のデフォルトは、/tmp/にUnixドメインソケットが作成されています。\n/tmp/.s.PGSQL.5120というファイルがあれば、以下のようにして接続します。\ntrdsql -driver postgres -dsn \"host=/tmp/ port=5120 dbname=postgres\" \"SELECT VERSION()\" \"PostgreSQL 12.0 on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 7.4.0-1ubuntu1~18.04.1) 7.4.0, 64-bit\"他のドライバとの違い 接続できれば、これまでと同じようにSQLが実行できますが、実際に実行されるのはPostgreSQL上なので、PostgreSQLが実行できるSQLを書く必要があります。\nまず注意が必要なのが、列名のエスケープに使用していた「`」文字が「\"」になります。\nPostgreSQLドライバを指定して、-aオプションによる解析をおこなうとSQLの例も変更されています。\ntrdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih -a sample.csv The table name is sample.csv. The file type is CSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | \\\"name\\\" | text | | price | text | +-------------+------+ Data samples: +----------+-------+ | \\\"name\\\" | price | +----------+-------+ | apple | 100 | +----------+-------+ Examples: trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", price FROM sample.csv\" trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", price FROM sample.csv WHERE \\\"name\\\" = 'apple'\" trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", count(\\\"name\\\") FROM sample.csv GROUP BY \\\"name\\\"\" trdsql -driver postgres -dsn \"host=localhost dbname=trdsql_test\" -ih \"SELECT \\\"name\\\", price FROM sample.csv ORDER BY \\\"name\\\" LIMIT 10\"また、PostgreSQLでは暗黙のCASTの範囲が狭いので、明示的にCASTをする必要があります。 （その代わり、PostgreSQLでは ::型名というCASTの文法が使えます）。\n日頃PostgreSQLを使っている方は、慣れた文法で書くことができますが、PostgreSQLに接続して使用するメリットはこれだけではありません。\n実テーブルの出力 trdsqlは対象のファイルが無くてもSQLの実行するようになっているため、実際のテーブルに対してSQLの実行が出来ます。そして、出力フォーマットの指定はそのまま有効なため、豊富なフォーマットに出力できるデータベースクライアントとして使用できます。\n例えば実際のテーブルをMarkDownで出力することも簡単にできます。\ntrdsql -driver postgres -dsn \"host=localhost dbname=noborus\" -omd -ih \"SELECT * FROM city LIMIT 10\" | city_id | city | country_id | last_update | |---------|--------------------|------------|----------------------| | 1 | A Corua (La Corua) | 87 | 2006-02-15T09:45:25Z | | 2 | Abha | 82 | 2006-02-15T09:45:25Z | | 3 | Abu Dhabi | 101 | 2006-02-15T09:45:25Z | | 4 | Acua | 60 | 2006-02-15T09:45:25Z | | 5 | Adana | 97 | 2006-02-15T09:45:25Z | | 6 | Addis Abeba | 31 | 2006-02-15T09:45:25Z | | 7 | Aden | 107 | 2006-02-15T09:45:25Z | | 8 | Adoni | 44 | 2006-02-15T09:45:25Z | | 9 | Ahmadnagar | 44 | 2006-02-15T09:45:25Z | | 10 | Akishima | 50 | 2006-02-15T09:45:25Z |動作的には、同名のファイルがあれば、そのファイルをインポートして（元のテーブルは削除されたりはしません）実行し、無ければそのまま実行することで元のテーブルに対してSQLが実行されます。\n",
    "description": "",
    "tags": [
      "trdsql",
      "postgresql"
    ],
    "title": "trdsql PostgreSQLエンジンの使用",
    "uri": "/blog/12_postgres/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "ここでtrdsqlの内部処理の概要を簡単に説明します。\ntrdsqlの内部処理は、以下のようになっています。\nオプションやSQLコマンドの解釈 SQLコマンド内のファイル名をデータベースにインポート SQLの実行 指定された出力フォーマットで実行結果を出力 SQLの実行は実際のRDBMSを使用して実行されます（デフォルトではSQLite3のメモリデータベース)。\ntrdsqlはインポートとエクスポートの形式を整えているだけで、データベースに丸投げしているツールと言えます。\nそのため、他の1行づつ処理するようなストリーミングができるツールとは違い、一旦全部のデータをインポートしてから実行されるため、非常に大きなデータではSQLの実行開始までに時間がかかります。\nしかしながら、SQLライクではなく本当のSQLが使用できます。\nこれらの特徴を踏まえて使用すると良いでしょう。\n",
    "description": "",
    "tags": [
      "trdsql"
    ],
    "title": "trdsql 処理の概要",
    "uri": "/blog/11_summary/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Stdin",
    "uri": "/tags/stdin/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "標準入力 trdsqlは他のUNIXツールのように標準入力からデータを受け取ることができます。ただSQLの文法上テーブル名を指定する必要があります。標準入力を使用するときは、「-」か「stdin」を使用します。\ncat test.csv|trdsql -icsv \"SELECT * FROM -\" apple,100 orange,50 potato,30 trdsqlは標準入力から受け取りますが、標準入力をすべて受け取り終わってからSQLの実行が開始されます。 そのため終わらないコマンドからの出力を受け取ることはできません。\nCSV、LTSV、JSONを出力するコマンドでは、ファイル名の代わりに標準入力を使えばそのまま利用できます。 例えば、文字コードがUTF-8でないファイルをUTF-8に変更してそのまま使用したり、\nnkf -w sjis.csv|trdsql -icsv \"SELECT * FROM -\" 大きなファイルを処理する前に先頭の数行のみを処理して試してみたりできます。\nhead -100 big.csv|trdsql -icsv \"SELECT * FROM -\" それ以外にも、例えばUNIX系のコマンドでは、スペースを区切りとして解釈すればテーブルデータとして扱える出力をするコマンドが数多くあります。\n例えば psコマンドでは、\nps PID TTY TIME CMD 1157 pts/3 00:00:00 ps 22590 pts/3 00:00:03 zshのようにヘッダーがあり、それぞれの列を出力しています（trdsqlでは連続したスペースの区切り文字は一つとして解釈するように動作します）。\nそのため、以下のように実行すると Ascii Table形式で出力できます。\nps|trdsql -ih -id \" \" -oat \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM -\" +-------+-------+----------+--------+ | PID | TTY | TIME | CMD | +-------+-------+----------+--------+ | 1363 | pts/3 | 00:00:00 | ps | | 1364 | pts/3 | 00:00:00 | trdsql | | 22590 | pts/3 | 00:00:03 | zsh | +-------+-------+----------+--------+標準入力の解析 また、trdsqlの-a解析オプションは標準入力も使用することが出来ます。\nコマンド | trdsql -ih -id \" \" -a - ps|trdsql -id \" \" -ih -a - The table name is -. The file type is CSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | \\`PID\\` | text | | \\`TTY\\` | text | | \\`TIME\\` | text | | \\`CMD\\` | text | +-------------+------+ Data samples: +---------+---------+----------+---------+ | \\`PID\\` | \\`TTY\\` | \\`TIME\\` | \\`CMD\\` | +---------+---------+----------+---------+ | 3168 | pts/0 | 00:00:00 | ps | +---------+---------+----------+---------+ Examples: trdsql -id \" \" -ih \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM -\" trdsql -id \" \" -ih \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM - WHERE \\`PID\\` = '3168'\" trdsql -id \" \" -ih \"SELECT \\`PID\\`, count(\\`PID\\`) FROM - GROUP BY \\`PID\\`\" trdsql -id \" \" -ih \"SELECT \\`PID\\`, \\`TTY\\`, \\`TIME\\`, \\`CMD\\` FROM - ORDER BY \\`PID\\` LIMIT 10\"",
    "description": "",
    "tags": [
      "trdsql",
      "stdin"
    ],
    "title": "trdsql 標準入力",
    "uri": "/blog/10_stdin/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "Wildcard ここまでは一つのファイルを対象としてきましたが、ログファイル等はローテートされて複数のファイルになっている場合があります。\n同じ列で構成されている対象ファイルであれば、ワイルドカードを使用して、複数のファイルを一つのテーブルとして扱うことができます。\nls test*.csv test1.csv test2.csv test3.csvtrdsql -icsv \"SELECT COUNT(*) FROM test*.csv\" 15圧縮ファイル また古いログファイルは圧縮されている場合があります。[gzip, bzip2, zstd, lz4, xz]圧縮であれば自動で伸長して実行します。\ntrdsql -iltsv \"SELECT * FROM access.log.2.gz\" 圧縮ファイルとワイルドカードを組み合わせて実行することもできます。\nls access.log access.log.1 access.log.2.gztrdsql -iltsv \"SELECT * FROM access.log.*\" ",
    "description": "",
    "tags": [
      "trdsql",
      "wildcard",
      "圧縮",
      "gz",
      "bz2",
      "zstd",
      "lz4",
      "xz"
    ],
    "title": "trdsql ワイルドカード、圧縮ファイル",
    "uri": "/blog/09_wildcard/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "Log集計 ApacheやnginxなどのLogをLTSVフォーマットで出力する方法も定着してきました。\nそのようなLogをtrdsqlで解析する例です。\n出力する側は、apacheのLogFormatの設定を以下のようにカスタマイズフォーマットにします。\nLogFormat \"host:%h\\tident:%l\\tuser:%u\\ttime:%t\\treq:%r\\tstatus:%\u003es\\tsize:%b\\treferer:\\%{Referer}i\\tua:%{User-Agent}i\" combined_ltsvhost,ident,user,time,req,status,size,referer,uaの項目が出力されます。\n実際のLogは以下のようになります。\nhost:176.99.192.42\tident:-\tuser:-\ttime:[21/Oct/2019:21:33:53 +0900]\treq:GET /category/software HTTP/1.1\tstatus:200\tsize:138\treferer:-\tua:Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0) host:192.54.157.102\tident:-\tuser:-\ttime:[21/Oct/2019:21:33:53 +0900]\treq:GET /item/electronics/4478 HTTP/1.1\tstatus:200\tsize:60\treferer:/category/sports\tua:Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0.1) Gecko/20100101 Firefox/9.0.1 host:88.60.137.115\tident:-\tuser:-\ttime:[21/Oct/2019:21:33:53 +0900]\treq:POST /search/?c=Games+Electronics HTTP/1.1\tstatus:200\tsize:98\treferer:/item/networking/929\tua:Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3 ...解析 まずは trdsql の -aを実行してみます。\nThe table name is log.ltsv. The file type is LTSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | \\`host\\` | text | | ident | text | | \\`user\\` | text | | \\`time\\` | text | | req | text | | \\`status\\` | text | | \\`size\\` | text | | referer | text | | ua | text | +-------------+------+ Data samples: +---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+ | \\`host\\` | ident | \\`user\\` | \\`time\\` | req | \\`status\\` | \\`size\\` | referer | ua | +---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+ | 176.99.192.42 | - | - | [21/Oct/2019:21:33:53 +0900] | GET /category/software | 200 | 138 | - | Mozilla/5.0 (compatible; MSIE | | | | | | HTTP/1.1 | | | | 9.0; Windows NT 6.1; WOW64; | | | | | | | | | | Trident/5.0) | +---------------+-------+----------+------------------------------+--------------------------------+------------+----------+---------+--------------------------------+ Examples: trdsql \"SELECT \\`host\\`, ident, \\`user\\`, \\`time\\`, req, \\`status\\`, \\`size\\`, referer, ua FROM log.ltsv\" trdsql \"SELECT \\`host\\`, ident, \\`user\\`, \\`time\\`, req, \\`status\\`, \\`size\\`, referer, ua FROM log.ltsv WHERE \\`host\\` = '176.99.192.42'\" trdsql \"SELECT \\`host\\`, count(\\`host\\`) FROM log.ltsv GROUP BY \\`host\\`\" trdsql \"SELECT \\`host\\`, ident, \\`user\\`, \\`time\\`, req, \\`status\\`, \\`size\\`, referer, ua FROM log.ltsv ORDER BY \\`host\\` LIMIT 10\"Examplesの実行例をヒントにこれまでに紹介したSQLを使用して実行していきます。\n上位を出力 アクセスが多いホストTop 5を出力\ntrdsql -oat \"SELECT \\`host\\`, count(\\`host\\`) as count FROM log.ltsv GROUP BY \\`host\\` ORDER BY count DESC LIMIT 5\" +----------------+-------+ | host | count | +----------------+-------+ | 36.69.176.222 | 5 | | 92.132.226.51 | 4 | | 76.222.144.225 | 4 | | 28.63.137.225 | 4 | | 28.57.188.28 | 4 | +----------------+-------+リクエストが多い順Top 5を出力\ntrdsql -oat \"SELECT req, count(req) as count FROM log.ltsv GROUP BY req ORDER BY count DESC LIMIT 5\" +--------------------------------+-------+ | req | count | +--------------------------------+-------+ | GET /category/software | 74 | | HTTP/1.1 | | | GET /category/electronics | 73 | | HTTP/1.1 | | | GET /category/games HTTP/1.1 | 66 | | GET /category/books HTTP/1.1 | 44 | | GET /category/office HTTP/1.1 | 30 | +--------------------------------+-------+検索条件と組み合わせて出力 status が200以外のリクエストと回数を出力\ntrdsql -oat \"SELECT req, status,count(req) as count FROM log.ltsv WHERE status != '200' GROUP BY req, status ORDER BY count DESC\" +-------------------------------+--------+-------+ | req | status | count | +-------------------------------+--------+-------+ | GET /item/books/3230 HTTP/1.1 | 404 | 1 | | GET /item/games/4672 HTTP/1.1 | 404 | 1 | +-------------------------------+--------+-------+",
    "description": "",
    "tags": [
      "trdsql",
      "log",
      "ltsv"
    ],
    "title": "trdsql Log集計",
    "uri": "/blog/08_log/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Group By",
    "uri": "/tags/group-by/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "GROUP集計 全体の合計を計算することもありますが、グループ毎の合計をまとめて出力したい場合もあります。 そこで使うのがGROUP BYです。\n前回の例をもう一度使用します。\nname,price apple,100 orange,50 melon,500 apple,90 apple,90 orange,40 orange,40ここでappleやorange毎の合計を出したい場合は、以下のように検索条件で絞れば計算できますが、nameの種類の数だけ実行するとなると大変な作業になります。\ntrdsql -ih \"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='apple'\" apple,280trdsql -ih \"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv WHERE name='orange'\" orange,130そこでGROUP BYを使ってnameをグループとして扱うことで、それぞれの集計結果を求めることができます。\ntrdsql -ih \"SELECT name,SUM(CAST(price AS INT)) as sum FROM sample.csv GROUP BY name\" apple,280 melon,500 orange,130前回の集計を少し変えてname毎に出すように出力してみます。 出力は-oat(Ascii Table)を使うと見やすく表示できます。\ntrdsql -ih -oat \\ \"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv GROUP BY name\" +--------+-------+-----+-----+-----+--------------------+ | name | count | min | max | sum | avg | +--------+-------+-----+-----+-----+--------------------+ | apple | 3 | 90 | 100 | 280 | 93.33333333333333 | | melon | 1 | 500 | 500 | 500 | 500 | | orange | 3 | 40 | 50 | 130 | 43.333333333333336 | +--------+-------+-----+-----+-----+--------------------+GROUP集計した結果をORDER BYで並べ替えることもできます。\ntrdsql -ih -oat \"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv GROUP BY name ORDER BY sum DESC\" +--------+-------+-----+-----+-----+--------------------+ | name | count | min | max | sum | avg | +--------+-------+-----+-----+-----+--------------------+ | melon | 1 | 500 | 500 | 500 | 500 | | apple | 3 | 90 | 100 | 280 | 93.33333333333333 | | orange | 3 | 40 | 50 | 130 | 43.333333333333336 | +--------+-------+-----+-----+-----+--------------------+GROUP集計した結果についてWHEREで条件を指定することはできません。そこからさらに絞るにはHAVINGを使用します。\ntrdsql -ih -oat \"SELECT name, COUNT(name) as count, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv GROUP BY name HAVING COUNT(name) \u003e 1 ORDER BY sum DESC\" +--------+-------+-----+-----+-----+--------------------+ | name | count | min | max | sum | avg | +--------+-------+-----+-----+-----+--------------------+ | apple | 3 | 90 | 100 | 280 | 93.33333333333333 | | orange | 3 | 40 | 50 | 130 | 43.333333333333336 | +--------+-------+-----+-----+-----+--------------------+",
    "description": "",
    "tags": [
      "trdsql",
      "group by"
    ],
    "title": "trdsql GROUP集計",
    "uri": "/blog/07_group/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Avg",
    "uri": "/tags/avg/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Max",
    "uri": "/tags/max/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Min",
    "uri": "/tags/min/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Sum",
    "uri": "/tags/sum/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "集計計算 集計には、COUNT()だけでなく集計計算することも当然できます。SQLには数値に対して計算をおこなう集計関数があらかじめ揃っています。\nここでは以下のようなCSVファイルを例に説明します。\nname,price apple,100 orange,50 melon,500 apple,90 apple,90 orange,40 orange,40SUM 合計を計算します。price列をすべて足します。\ntrdsql -ih \"SELECT SUM(price) FROM sample.csv\" 910前にも書いたようにtrdsqlは列をテキスト型として扱いますので、本来はCASTして数値型にしてから計算する必要があります。ただ、集計の関数を使用する場合は、暗黙のCASTがされて省略できる場合があります（使用するデータベースによります）。\n明示的にCASTする場合は以下のようにします。\ntrdsql -ih \"SELECT SUM(CAST(price AS int)) FROM sample.csv\" 910AVG 平均を計算します。合計/件数で計算できますが、関数が用意されているので、使用したほうがわかりやすく書けます。この例では、平均の意味はそれほどないかもしれませんが。\ntrdsql -ih \"SELECT AVG(CAST(price AS int)) FROM sample.csv\" 130MIN,MAX 最小値や最大値を出力します。\ntrdsql -ih -oh \"SELECT MIN(CAST(price AS INT)),MAX(CAST(price AS INT)) FROM sample.csv\" MIN(CAST(price AS INT)),MAX(CAST(price AS INT)) 40,500MINやMAXはテキスト型でも使用できるため、明示的にCASTする必要があります。\n（MINやMAXのnameを知りたくなるところですが、SQLだとちょっと複雑になるので後に回します）。\n前回書いたように、集計関数は一度に実行できます。\ntrdsql -ih -oat \"SELECT COUNT(name) as count, COUNT(DISTINCT name) as uniq, MIN(CAST(price AS INT)) AS min, MAX(CAST(price AS INT)) as max, SUM(CAST(price AS INT)) as sum, AVG(CAST(price AS INT)) as avg FROM sample.csv\" +-------+------+-----+-----+-----+-----+ | count | uniq | min | max | sum | avg | +-------+------+-----+-----+-----+-----+ | 7 | 3 | 40 | 500 | 910 | 130 | +-------+------+-----+-----+-----+-----+",
    "description": "",
    "tags": [
      "trdsql",
      "sum",
      "min",
      "max",
      "avg"
    ],
    "title": "trdsql 集計計算",
    "uri": "/blog/06_calculation/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Count",
    "uri": "/tags/count/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "COUNT(*) 最初はCOUNT(*)です。全体の件数を数えることが出来ます。\n集計関数を使用すると元の行と列のデータは出力されず、そこから集計された結果が出力されます。\n以下の例は結果が１行なので、CSVの様に見えませんが、1行1列(ヘッダー付き)のCSVとして出力されています。\n単純に件数を数えるだけですが、ヘッダーと解釈して数に含まないか等の注意が必要です。\ntrdsql -icsv -ih -oh \"SELECT COUNT(*) FROM header.csv\" count(*) 3検索条件の指定が出来ます。検索条件にあてはまる件数を知りたい時に使用します。\ntrdsql -icsv -ih -oh \"SELECT COUNT(*) FROM header.csv WHERE id\u003c'1'\" count(*) 2COUNT(列名) COUNT(列名) もよく使用します。RDBMSではNULLが除外されるので、COUNT(*)とは区別して使われます。\nまた、COUNTとDISTINCTを組み合わせると重複を省いた件数を出力できます。\n以下のようなCSVファイルで実行してみます。\nid,name 1,aaa 2,bbb 3,ccc 4,aaatrdsql -icsv -ih -oh \"SELECT COUNT(name) FROM abc.csv\" count(name) 4trdsql -ih -oh \"SELECT COUNT(DISTINCT name) FROM abc.csv\" COUNT(DISTINCT name) 3集計関数は一度に実行することもできます。\ntrdsql -ih -oh \"SELECT COUNT(name), COUNT(DISTINCT name) FROM abc.csv\" COUNT(name),COUNT(DISTINCT name) 4,3",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "count"
    ],
    "title": "trdsql 集計",
    "uri": "/blog/05_aggregate/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "検索条件 前回、列の並べ替え、抽出、行の並べ替えをしたので、今回は行の抽出です。 行を抽出するには、WHEREを付けて、検索条件を書きます。\n前回と同じ例のファイルを使います。\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv WHERE id=1\" 1,OrangeSQLのメインな機能ですね。検索条件を書くだけで、該当する行を出力できます。\nAND, OR AND や OR や ()括弧を使用することにより複雑な条件が書けます。\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv WHERE id='1' OR id='2'\" 1,Orange 2,Melontrdsql -ih \"SELECT id, \\`name\\` FROM header.csv \" \"WHERE (id='1' OR id='2') AND \\`name\\`='Orange'\" 1,Orange前回にも書いたようにtrdsqlでは、CSVやLTSV、JSONの値をtext型として扱っています。そのため、「=」の条件で書いているときには、暗黙のCASTが効いて型をそれほど意識しなくても良いですが、範囲を指定するときには結果が変わってしまうので、CASTする必要があります。\ntrdsql -ih \"SELECT id,\\`name\\` FROM header.csv \" \"WHERE CAST(id as int)\u003e1\" 2,Melon 3,AppleSELECTを使用するときは、列の指定のところでCASTを使用して、そのCASTした列を指定して検索条件やORDER BYを書くことが出来ます。\nその際には元の列名はCAST前の列を指しているので、AS 別名を使用してCAST後の列名を使用します（CAST後の列名に元の名前を付けることは出来ます）。\ntrdsql -ih \"SELECT CAST(id AS int) AS id,\\`name\\` FROM header.csv WHERE id\u003e1\" 2,Melon 3,AppleIN WHEREの条件として、=や ‘\u003e’、\u003c の範囲指定以外にIN句が使用できます。 複数の指定をORでつないで書いていたのをIN句により簡潔に書くことができます。\ntrdsql -ih \"SELECT * FROM header.csv WHERE id IN ('1','3')\" 1,Orange 3,Appleまた、IN句の使い方として、列側を並べて書くことで、複数の列を一度に検索条件にできます。 例えば、idかnameに ‘Apple’がある行を検索できます。\ntrdsql -ih \"SELECT * FROM header.csv WHERE 'Apple' IN (id,name)\" 3,Apple",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "WHERE"
    ],
    "title": "trdsql 簡単なSQL その２",
    "uri": "/blog/04_sql2/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: WHERE",
    "uri": "/tags/where/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsqlと簡単なSQLを使用することで、他のUNIXツールを組み合わせて出来るようなことが一発で出来るようになります。\nファイル解析 SELECT * FROMから進んで簡単なSQLを実行する場合、あらかじめ列名を把握しておく必要があります。 trdsql に -aオプションにファイル名を付けて実行するとファイルを解析して情報を出力してくれます。\n（CSVファイルの拡張子が.csvの様な場合は、-icsvを省略することが出来ます。-ih ヘッダを解釈、 -is スキップ数の指定等のオプションを必要に応じて付けないと意図しない解析結果になることがあります）。\ntrdsql -ih -a header.csv The table name is header.csv. The file type is CSV. Data types: +-------------+------+ | column name | type | +-------------+------+ | id | text | | \\`name\\` | text | +-------------+------+ Data samples: +----+----------+ | id | \\`name\\` | +----+----------+ | 1 | Orange | +----+----------+ Examples: trdsql -ih \"SELECT id, \\`name\\` FROM header.csv\" trdsql -ih \"SELECT id, \\`name\\` FROM header.csv WHERE id = '1'\" trdsql -ih \"SELECT id, count(id) FROM header.csv GROUP BY id\" trdsql -ih \"SELECT id, \\`name\\` FROM header.csv ORDER BY id LIMIT 10\"Examplesの使用 Examplesに実際に実行できるSQLが出力されています。\nSQLには予約語があり、予約語を列名に使用する場合や小文字以外の列名を使用している場合等エスケープする必要がある列名は上記のようにエスケープされて（データベースにより「`」か「\"」）います。 コマンドラインから使用する場合は、更にシェルからエスケープするために「\\」を追加して、「\\’」で囲んで実行します。\n（SQLの実装やバージョンによって予約語は変更されますが、予約語以外をエスケープしても問題ないので、実際には必要のない語もエスケープされています）。\nここでExamplesの一つを実行してみます。\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv\" 1,Orange 2,Melon 3,AppleSELECT * FROM header.csvと同じ結果になりました。\nこのSQLをひな型として変更していきます。\n列の並べ替え、列の抽出 今度は、id,nameの順番を入れ替えて、name,idの順で出力してみます。\ntrdsql -ih \"SELECT \\`name\\`,id FROM header.csv\" Orange,1 Melon,2 Apple,3そのまんまですね。ではidは必要ないのでnameのみを出力する場合はnameだけ残せば良いことになります。\ntrdsql -ih \"SELECT \\`name\\` FROM header.csv\" Orange Melon Apple簡単すぎて怒られそうな内容ですが、UNIXツールを使用するならawkやcutで、そこそこ説明が内容になります。\n行の並べ替え もう一つ、並べ替えることがあるとしたら行です。行の並べ替えは`ORDER BY 列名｀で出来ます。 昇順（小さい→大きい）はASC（デフォルトなので省略可能）、降順（大きい→小さい）はDESCを付けます。\ntrdsql -ih \"SELECT id, \\`name\\` FROM header.csv ORDER BY \\`name\\`\" 3,Apple 2,Melon 1,Orangetrdsql -ih \"SELECT id, \\`name\\` FROM header.csv ORDER BY id DESC\" 3,Apple 2,Melon 1,Orange実は、これでは意図した通りに並べ替えられない可能性があります。 trdsqlではCSV、LTSV、JSON等の入力データはtext型として動作します。ここでのidのような場合は、idを数値として扱わないとふた桁以上のときに意図しない結果になります。\n数値として扱うには、以下のようにSQLのCAST(列名 AS 型名)を使用します。\ntrdsql -ih \"SELECT id,\\`name\\` FROM header.csv ORDER BY CAST(id AS int) DESC\" さらに ORDER BY と組み合わせて、よく使用するのがLIMITです。 LIMITは指定した件数のみ出力するように制限できます。一つだけ出力したいとか上位10件のみ出力したいときに使用します。\ntrdsql -ih \"SELECT id,\\`name\\` FROM header.csv ORDER BY CAST(id AS int) DESC LIMIT 1\" 3,Apple",
    "description": "",
    "tags": [
      "trdsql",
      "sql",
      "cut",
      "sort"
    ],
    "title": "trdsql 簡単なSQL",
    "uri": "/blog/03_sql/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "trdsqlはCSV等のファイルをSQLで処理するツールとして説明していますが、単純にファイル形式を変換するツールとしても使用できます。\nその場合、SQLは以下の定型句さえ覚えておけば、十分です。 ファイル内のすべての行と列を出力します。\nSELECT * FROM ファイル名後は、オプションとして入力形式(-i…)と出力形式(-o…)を指定してあげればファイル形式の変換が可能です。 CSV、LTSV、JSON等の相互変換ができます。\nCSV(-icsv)からLTSV(-oltsv)への変換は以下のようにします。\ntrdsql -icsv -oltsv \"SELECT * FROM ファイル名\" CSV header CSVファイルはヘッダーに列名がついている場合 -ih でヘッダーを解釈して列名として使用できます。\nheader.csv\nid,name 1,Orange 2,Melon 3,Appletrdsql -icsv -ih -oltsv \"SELECT * FROM header.csv\" \u003e test.ltsv test.ltsv\nid:1\tname:Orange id:2\tname:Melon id:3\tname:Appleヘッダーが無い場合は、列名はc1,c2,c3…の連番になります。\nLTSV入力 上記で出力されたLTSVを入力に使用すれば、CSVに戻ります。\ntrdsql -iltsv -ocsv -oh \"SELECT * FROM test.ltsv\" id,name 1,Orange 2,Melon 3,Apple区切り文字の変更（TSV） また、CSVはComma-Separated Valuesではなく、Character-separated valuesとも呼ばれたりすることがあるように、区切り文字として「,」以外を使用できます。\n-id オプションの後に文字を指定することにより変更ができます。 タブ区切りの場合（TSVとも呼ばれます）は、\"\\t\"を使用します。\n以下はTSVからCSVの変更になります。\ntrdsql -icsv -id \"\\t\" -ih \"SELECT * FROM test.tsv\" JSON出力 JSON出力では、全体を配列としてのJSONが出力されます。\ntrdsql -icsv -ih -ojson \"SELECT * FROM header.csv\" [ { \"id\": \"1\", \"name\": \"Orange\" }, { \"id\": \"2\", \"name\": \"Melon\" }, { \"id\": \"3\", \"name\": \"Apple\" } ]JSON入力 trdsqlではJSONは、行と列で構成されているフォーマットを想定しています。 一つは、上記で出力したような、トップが配列になっていて、名前と値が含まれているフォーマットです。\nもう一つは、下記のように１行が１つのJSONになっているNDJSON、LDJSON、JSONLとも呼ばれるフォーマットです。\n{\"id\":\"1\",\"name\":\"Orange\"} {\"id\":\"2\",\"name\":\"Melon\"} {\"id\":\"3\",\"name\":\"Apple\"}このような列が同じで揃っていれば、CSVやLTSVと同様に入力が可能です。\ntrdsql -ijson -ocsv \"SELECT * FROM test.json\" (JSONのオブジェクトは順序が不定のため、列の順番はname,idのように前後することがあります。)\nその他の出力 また出力だけならば、更に多くのフォーマットに対応しているため、マークダウンのテーブル(CSV2MDとかJSON2MDとかLTSV2MDとか呼ばれるツールに相当)として出力できます。\ntrdsql -icsv -ih -ovf \"SELECT * FROM header.csv\" | id | name | |----|--------| | 1 | Orange | | 2 | Melon | | 3 | Apple |列が多いCSVファイル等で横に長くなってしまって見づらいファイルをVerticalフォーマットで縦に表示したり出来ます。\ntrdsql -icsv -ih -ovf \"SELECT * FROM header.csv\" ---[ 1]----------------------------------------------------- id | 1 name | Orange ---[ 2]----------------------------------------------------- id | 2 name | Melon ---[ 3]----------------------------------------------------- id | 3 name | Apple使用できるフォーマット フォーマット 入力 出力 注釈 CSV ○ ○ TSV等もオプションにより対応 LTSV ○ ○ ltsv.org JSON ○ ○ www.json.org JSONL ○ ○ 入力はJSONで可能 TBLN ○ ○ tbln.dev RAW × ○ そのまま出力（エスケープ処理をしない） MD × ○ MarkDownテーブル AT × ○ ASCIIテーブル VF × ○ Verticalフォーマット CSV id,name 1,Orange 2,Melon 3,AppleLTSV id:1\tname:Orange id:2\tname:Melon id:3\tname:AppleJSON [ { \"id\": \"1\", \"name\": \"Orange\" }, { \"id\": \"2\", \"name\": \"Melon\" }, { \"id\": \"3\", \"name\": \"Apple\" } ]JSONL {\"id\":\"1\",\"name\":\"Orange\"} {\"id\":\"2\",\"name\":\"Melon\"} {\"id\":\"3\",\"name\":\"Apple\"}TBLN ; name: | id | name | ; type: | text | text | | 1 | Orange | | 2 | Melon | | 3 | Apple |RAW id,name 1,Orange 2,Melon 3,AppleMD | id | name | |----|--------| | 1 | Orange | | 2 | Melon | | 3 | Apple |AT +----+--------+ | id | name | +----+--------+ | 1 | Orange | | 2 | Melon | | 3 | Apple | +----+--------+VF ---[ 1]------------------------------------------------------------------- id | 1 name | Orange ---[ 2]------------------------------------------------------------------- id | 2 name | Melon ---[ 3]------------------------------------------------------------------- id | 3 name | Apple",
    "description": "",
    "tags": [
      "trdsql",
      "csv2ltsv",
      "ltsv2csv",
      "csv2json",
      "json2csv"
    ],
    "title": "trdsql ファイルフォーマット変換",
    "uri": "/blog/02_convert/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Docker",
    "uri": "/tags/docker/index.html"
  },
  {
    "breadcrumb": "Top \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Install",
    "uri": "/tags/install/index.html"
  },
  {
    "breadcrumb": "Top \u003e Blog",
    "content": "概要 trdsqlはテーブル（表）形式のテキストに対してSQLを実行するCLIツールです。 テーブル形式とは、行と列で構成される以下のようなデータです。\n1列 2列 1行 a1 a2 2行 b1 b2 結果をざまざまなフォーマットに出力できるので、テーブル形式データのフォーマット変換にも使用できます。\nインストール Linux/Windows/macOSの場合は、GitHubのリリースページからバイナリをダウンロードできます。 Goで作られていて、他に依存ライブラリがない１バイナリなので、展開してすぐに実行できます。\nDocker Dockerが使用できる環境であればDockerでも実行できます。Docker Hubからdocker pullも使用できるので、以下のようにしてpullしてください。\ndocker pull noborus/trdsql 入力ファイルの場所をマウントして使用して下さい。結果は標準出力に出るので、そのままリダイレクトで受け取れます。\nカレントディレクトリにあるtest.csvに対して実行するときは以下のようになります。\ndocker run --rm -it -v $(pwd):$(pwd) --workdir $(pwd) noborus/trdsql \"SELECT * FROM test.csv\" \u003e test_new.csv Homebrew macOSが無いので、実際には試していませんが、以下でインストールできるのではないかと思ってます。\nbrew tap noborus/trdsql brew install trdsql go get go のビルド環境があれば自分でビルドすることもできます。\ngo get -u -d github.com/noborus/trdsql cd trdsql make 自分の環境用にビルドするのは難しくないと思いますが、クロスコンパイルする場合は、依存しているgo-sqlite3が cgo を使用しているので、注意が必要になります。\n実行 実行はターミナル上から実行します。\ntrdsql [OPTIONS] [SQLコマンド] SQLコマンドでは、データベースのテーブルを指定しますが、テーブルの代わりにファイルをそのまま指定できます。\n",
    "description": "",
    "tags": [
      "trdsql",
      "install",
      "docker"
    ],
    "title": "trdsql インストール",
    "uri": "/blog/01_install/index.html"
  }
]
