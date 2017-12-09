<ListItem primaryText="Home" onClick={(item) => this.onLinkClick(item, "home")} />
        <ListItem primaryText="About" leftIcon={<ActionGrade />} onClick={(item) => this.onLinkClick(item, "about")} />
        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        <ListItem
          primaryText="Inbox"
          leftIcon={<ContentInbox />}
          initiallyOpen={true}
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem
              key={1}
              primaryText="Starred"
              leftIcon={<ActionGrade />}
            />,
            <ListItem
              key={2}
              primaryText="Sent Mail"
              leftIcon={<ContentSend />}
              disabled={true}
              nestedItems={[
                <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
              ]}
            />,
            <ListItem
              key={3}
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              open={this.state.isDrawerOpen}
              onNestedListToggle={this.handleNestedListToggle}
              nestedItems={[
                <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
              ]}
            />,
          ]}
     />