module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // Composer
    'composer',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    // 'fortune',
    'readline', // ensure gawk gets good readline
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // jq is a sort of JSON grep
    'jq',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    'mas',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'tmux',
    'todo-txt',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri'
  ],
  cask: [
    'alfred',
    'bartender',
    'bettertouchtool',
    'charles',
    'cleanmymac',
    'diffmerge',
    'docker', // docker for mac
    'filezilla',
    'firefox',
    'flux',
    'google-chrome',
    'gpg-suite',
    'harvest',
    'handbrake',
    'ireadfast',
    'iterm2',
    'licecap',
    'little-snitch',
    'macbreakz',
    'mailbox',
    'micro-snitch',
    'onepassword',
    'sequel-pro',
    'signal',
    'sizeup',
    'sketch',
    'skype',
    'slack',
    'spotify',
    'suspicious-package',
    'textexpander',
    'the-unarchiver',
    'visual-studio-code',
    'vlc',
    'xquartz'
  ],
  gem: [
  ],
  npm: [
    'electron',
    'eslint',
    'instant-markdown-d',
    'ignite-cli',
    'gatsby-cli',
    'gulp-cli',
    'npm-check-updates',
    'prettyjson',
    'react-native-cli',
    'trash',
    'vtop',
    'webpack',
    'wp-cli',
    'yarn',
    'yo'
  ]
};
