import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 15H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 17V13C22 11.5535 20.9763 10.3461 19.6138 10.0629C19.243 9.98575 18.893 9.786 18.7236 9.44721L17.382 6.76393C16.535 5.07001 14.8037 4 12.9098 4H7.5C6.67157 4 6 4.67157 6 5.5C6 6.32843 6.67157 7 7.5 7H11.5C12.6046 7 13.5 7.89543 13.5 9V10H5C3.34315 10 2 11.3431 2 13V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Curling',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
