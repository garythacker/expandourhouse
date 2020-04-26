GO_LIB_SOURCES := \
	$(wildcard src/bulkInserter/*.go) \
	$(wildcard src/congresses/*.go) \
	$(wildcard src/districtDb/*.go) \
	$(wildcard src/states/*.go) \
	$(wildcard src/stylemetadata/*.go) \
	$(wildcard src/utils/*.go) \
	src/states/states.go \
	src/cmd/make-style/styleTemplate.go \
	src/go.mod \
	src/go.sum

_PROGRAMS = \
	add-labels \
	congress-start-year \
	extract-states-for-year \
	make-style \
	mark-irregular-states \
	process-districts \
	upload

GO = GOPATH="${TMP}" go

src/states/states.go: src/states/scripts/makeStates.go src/states/placeholder.go
	cd src/states && ${GO} generate

src/cmd/make-style/styleTemplate.go: src/cmd/make-style/scripts/includeStyle.go \
	src/cmd/make-style/main.go src/cmd/make-style/style-template.json
	cd src/cmd/make-style && ${GO} generate

define PROGRAM_TARGETS
$${TMP}/${prog}: $$(wildcard src/cmd/${prog}/*.go) $${GO_LIB_SOURCES}
	cd "src/cmd/${prog}" && $${GO} build -o "$$@"

clean-${prog}:
	cd "src/cmd/${prog}" && $${GO} clean

.PHONY: clean-${prog}
endef

$(foreach prog,${_PROGRAMS},$(eval ${PROGRAM_TARGETS}))

.PHONY: programs clean-programs

programs: $(patsubst %,${TMP}/%,${_PROGRAMS})

clean-programs: $(patsubst %,clean-%,${_PROGRAMS})
	rm -f src/cmd/make-style/styleTemplate.go src/states/states.go