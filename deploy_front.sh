#!/bin/bash

SESSION_NAME="front"
REPO_DIR="$HOME/github_front/brawl"
GIT_REPO_URL="https://github.com/dr1m11/brawl.git"

# Функция для выполнения команд в tmux
tmux_send() {
    tmux send-keys -t $SESSION_NAME "$1" C-m
}

if [ ! -d "$REPO_DIR" ]; then
    git clone $GIT_REPO_URL $REPO_DIR
fi

cd $REPO_DIR && git pull origin main

tmux kill-session -t $SESSION_NAME

tmux new-session -d -s $SESSION_NAME
tmux_send "npm run deploy"