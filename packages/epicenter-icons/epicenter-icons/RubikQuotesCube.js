import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 12L12 17L3 12' })
const _hoisted2 = h('path', { 'd': 'M21 7L12 2L3 7M21 7L12 12L3 7M21 7V17L12 22L3 17V7' })
const _hoisted3 = h('path', { 'd': 'M12 22V12' })
const _hoisted4 = h('path', { 'd': 'M16.5 19.5V9.5L7.5 4.5' })
const _hoisted5 = h('path', { 'd': 'M7.5 19.5V9.5L16.5 4.5' })

export default defineComponent({
    name: 'RubikQuotesCube',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
