import json
json_string_info = '{"primeiro_nome": "Natan", "segundo_nome": "nascimento"}'
parsed_info = json.loads(json_string_info)
type(parsed_info)
json_string_info
parsed_info["primeiro_nome"]
