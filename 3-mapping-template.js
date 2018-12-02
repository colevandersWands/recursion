// for super powerful problem solving
// find some good challenges for this

function mapping_starter(args) {
	const mapped_args = map(args);
	const mapped_result = recursive_solution(mapped_args);
	const raw_result = demap(args);
	return raw_result;
};

function map() {}
function demap() {}


function recursive_solution(args) {
	if (base_case(args)) {
		return turn_around(args)
	} else {
		const broken_down_args = break_down(args);
		const recursed_args = recursive_solution(broken_down_args);
		return build_up(recursed);
	}
}

function base_case() {}
function turn_around() {}
function break_down() {}
function build_up() {}