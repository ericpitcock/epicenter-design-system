import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 10C12.8847 13.01 11.5593 18.066 10.9128 20.9991C9.56719 18.2908 7 15 4 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '18', 'cy': '5', 'r': '2', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BounceRight',
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
