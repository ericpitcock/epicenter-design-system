import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 15C2.14277 15.4274 2.31023 15.8431 2.50062 16.2452M4.12547 18.7463C4.44158 19.1137 4.781 19.4596 5.14137 19.7814M9 22C8.55224 21.8557 8.11701 21.6824 7.69641 21.4822', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12M12 13.5V16M10.5 12H6', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TimeQuarter',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
