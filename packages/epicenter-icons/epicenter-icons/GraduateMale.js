import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 13V15C19 20.75 12 22 12 22C12 22 5 20.75 5 15V13', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 10C16.995 9.36815 14.5882 9 12 9C9.41179 9 7.00499 9.36815 5 10V13.5C7.00499 12.8682 9.41179 12.5 12 12.5C14.5882 12.5 16.995 12.8682 19 13.5V10Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 10L2.4691 8.44968C1.82161 8.05516 1.84983 7.12681 2.52015 6.77036L11.0441 2.23762C11.6399 1.92079 12.3601 1.92079 12.9559 2.23762L21.4798 6.77036C22.1502 7.12681 22.1784 8.05516 21.5309 8.44968L19 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GraduateMale',
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
