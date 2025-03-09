<script>
    let { name, version, description, website } = $props();
    // let { name, ...stuff } = $props(); rest property 를 이용 destructuring 구조분해할당
    // let stuff = $props(); 전체로 들고 오는 방법방법 stuff.name stuff.description 으로 접근
</script>

<p>
    The <code>{name}</code> package is {description}. Download version {version} from
    <a href="https://wwww.npmjs.com/package/{name}">npm</a> and <a href={website}>learn more here</a>
</p>