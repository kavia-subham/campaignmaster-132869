#!/bin/bash
cd /home/kavia/workspace/code-generation/campaignmaster-132869/campaignflow_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

